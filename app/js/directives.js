'use strict';

/* Directives */


angular.module('myApp.directives', []).

    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])

    .directive('chart1', [function (version) {
        return function (scope, elm, attrs) {

//            All the stuff

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
;
