'use strict';

/* Directives */


angular.module('myApp.directives', ['d3'])

    .directive('ngChart1', ['d3Service', function (d3Service) {
        return {
            link: function (scope, elm, attrs) {
                d3Service.d3().then(function (d3) {

                    var data = [4, 8, 15, 16, 23, 42];

                    var scale = d3.scale.linear()
                        .domain([0, d3.max(data)])
                        .range([0, 420]);

                    d3.select("#chart1")
                        .selectAll("div")
                        .data(data)
                        .enter().append("div")
                        .style("width", function (d) {
                            return scale(d) + "px";
                        })
                        .text(function (d) {
                            return d;
                        });

                });
            }
        };
    }])


    .directive('ngChart2', ['d3Service', function (d3Service) {
        return {
            link: function (scope, elm, attrs) {
                d3Service.d3().then(function (d3) {

                    var width = 420,
                        barHeight = 20;

                    var chart = d3.select("#chart2")
                        .attr("width", width);

                    var scale = d3.scale.linear()
                        .range([0, 420]);

                    d3.csv("data/data.csv", type, function (error, data) {

                        scale.domain([0, d3.max(data, function (d) {
                            return d.value;
                        })]);

                        chart.attr("height", barHeight * data.length);

                        var bar = chart.selectAll("g")
                            .data(data)
                            .enter().append("g")
                            .attr("transform", function (d, i) {
                                return "translate(0, " + i * barHeight + ")";
                            });

                        bar.append("rect")
                            .attr("width", function (d) {
                                scale(d.value);
                            })
                            .attr("height", barHeight - 1);

                        bar.append("text")
                            .attr("x", function (d) {
                                return scale(d.value) - 3;
                            })
                            .attr("y", barHeight / 2)
                            .attr("dy", ".35em") // this vertically aligns text
                            .text(function (d) {
                                return d.value;
                            });
                    });
                });

                function type(d) {
                    d.value = +d.value; // coerce to number
                    return d;
                }
            }
        };
    }])
;
