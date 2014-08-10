'use strict';

/* Directives */


angular.module('myApp.directives', [])

    .directive('ngChart1', [function () {
        return function (scope, elm, attrs) {

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


        };
    }])
    
    
    .directive('ngChart2', [function () {
        return function (scope, elm, attrs) {

            var data = [4, 8, 15, 16, 23, 42];

            var width = 420,
                barHeight = 20;

            var chart = d3.select("#chart2")
                .attr("width", width)
                .attr("height", barHeight * data.length);

            var scale = d3.scale.linear()
                .domain([0, d3.max(data)])
                .range([0, 420]);

//            So this must be a reference to some sort of collection of the bars?
            var bar = chart.selectAll("g")
                .data(data)
                .enter().append("g")
                .attr("transform", function (d, i){
                    return "translate(0, " + i * barHeight +")";
                });
            
            bar.append("rect")
                .attr("width", scale)
                .attr("height", barHeight - 1); // So this must be relative to the parent g?
            
            bar.append("text")
                .attr("x", function(d) {
                   return scale(d) - 3; 
                })
                .attr("y", barHeight / 2)
                .attr("dy", ".35em") //todo what the hell is dy?
                .text(function(d) {return d;});

        };
    }])
;
