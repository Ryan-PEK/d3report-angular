'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('LoadDailyCtrl', function($scope) {
        $scope.isCollapsed = true;
        $scope.radioModel = 'Middle';
        $scope.dtFrom = new Date();
        $scope.dtTo = new Date();
        $scope.showWeeks = false;
        $scope.toggleWeeks = function() {
            $scope.showWeeks = !$scope.showWeeks;
        };
        $scope.clear = function() {
            $scope.dtFrom = null;
            $scope.dtTo = null;
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return false;
        };

        $scope.minDate = null;
        $scope.fromOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.fromOpened = true;
        };
        $scope.toOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.toOpened = true;
        };
        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 0
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.loadLineGraph = function(selector, colors) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: -1
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    filled: false,
                    interactive: true,
                    colors: colors,
                    autoResize: true
                },
                chart = cloudViz.line(opts);
            chart.render();
        };

        $scope.reportName = 'peak';
        $scope.reportDataMap = {
            'peak': 'daily_peak',
            '95': 'daily_95',
            'average': 'daily_average',
            'volume': 'daily_volume',
            'requests': 'daily_requests',
            'errors': 'daily_errors'
        };
        $scope.reportColorMap = {
            'peak': ['#8cc350', '#5a6eaa', '#d755a5'],
            '95': ['#8cc350', '#5a6eaa', '#d755a5'],
            'average': ['#8cc350', '#5a6eaa', '#d755a5'],
            'volume': ['#1ebed7'],
            'requests': ['#9b8ce6'],
            'errors': ['#fa5a50']
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.$watch('reportName', function() {
                $scope.graphData = s7report_data[$scope.reportDataMap[$scope.reportName]];
                $scope.loadLineGraph('#Chart', $scope.reportColorMap[$scope.reportName]);
            });
        })
    })
    .controller('LoadMonthlyCtrl', function($scope) {
        $scope.isCollapsed = true;
        $scope.radioModel = 'Middle';
        $scope.dtFrom = new Date();
        $scope.dtTo = new Date();
        $scope.showWeeks = false;
        $scope.toggleWeeks = function() {
            $scope.showWeeks = !$scope.showWeeks;
        };
        $scope.clear = function() {
            $scope.dtFrom = null;
            $scope.dtTo = null;
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return false;
        };

        $scope.minDate = null;
        $scope.fromOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.fromOpened = true;
        };
        $scope.toOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.toOpened = true;
        };
        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 0
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.loadLineGraph = function(selector, colors) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: -1
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    filled: true,
                    interactive: true,
                    colors: colors,
                    autoResize: true
                },
                chart = cloudViz.line(opts);
            chart.render();
        };

        $scope.reportName = 'peak';
        $scope.reportDataMap = {
            'peak': 'monthly_peak',
            '95': 'monthly_95',
            'average': 'monthly_average',
            'volume': 'monthly_volume',
            'requests': 'monthly_requests',
            'errors': 'monthly_errors'
        };
        $scope.reportColorMap = {
            'peak': ['#8cc350', '#5a6eaa', '#d755a5'],
            '95': ['#8cc350', '#5a6eaa', '#d755a5'],
            'average': ['#8cc350', '#5a6eaa', '#d755a5'],
            'volume': ['#1ebed7'],
            'requests': ['#9b8ce6'],
            'errors': ['#fa5a50']
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.$watch('reportName', function() {
                $scope.graphData = s7report_data[$scope.reportDataMap[$scope.reportName]];
                $scope.loadLineGraph('#Chart', $scope.reportColorMap[$scope.reportName]);
            });
        })
    })
    .controller('LoadRequestsCtrl', function($scope) {
        $scope.isCollapsed = true;
        $scope.radioModel = 'Middle';
        $scope.dtFrom = new Date();
        $scope.dtTo = new Date();
        $scope.showWeeks = false;
        $scope.toggleWeeks = function() {
            $scope.showWeeks = !$scope.showWeeks;
        };
        $scope.clear = function() {
            $scope.dtFrom = null;
            $scope.dtTo = null;
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return false;
        };

        $scope.minDate = null;
        $scope.fromOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.fromOpened = true;
        };
        $scope.toOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.toOpened = true;
        };
        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 0
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.loadDountGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: 5
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    width: '100%',
                    height: '100%',
                    autoResize: true,
                    interactive: true,
                },
                chart = cloudViz.donut(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.graphData = s7report_data['request_types'];
            $scope.loadDountGraph('#Chart');
        })
    })
    .controller('LoadStreamCtrl', function($scope) {
        $scope.isCollapsed = true;
        $scope.radioModel = 'Middle';
        $scope.dtFrom = new Date();
        $scope.dtTo = new Date();
        $scope.showWeeks = false;
        $scope.toggleWeeks = function() {
            $scope.showWeeks = !$scope.showWeeks;
        };
        $scope.clear = function() {
            $scope.dtFrom = null;
            $scope.dtTo = null;
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return false;
        };

        $scope.minDate = null;
        $scope.fromOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.fromOpened = true;
        };
        $scope.toOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.toOpened = true;
        };
        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 0
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.loadBarGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: -1
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    width: '100%',
                    height: '100%',
                    autoResize: true,
                    interactive: true,
                    position: 'stack'
                },
                chart = cloudViz.bar(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.graphData = s7report_data['stream'];
            $scope.loadBarGraph('#Chart');
        })
    })
    .controller('LoadDomainCtrl', function($scope) {
        $scope.isCollapsed = true;
        $scope.radioModel = 'Middle';
        $scope.dtFrom = new Date();
        $scope.dtTo = new Date();
        $scope.showWeeks = false;
        $scope.toggleWeeks = function() {
            $scope.showWeeks = !$scope.showWeeks;
        };
        $scope.clear = function() {
            $scope.dtFrom = null;
            $scope.dtTo = null;
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return false;
        };

        $scope.minDate = null;
        $scope.fromOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.fromOpened = true;
        };
        $scope.toOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.toOpened = true;
        };
        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 0
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.loadChoroplethGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                data = s7report_data['us_distribution'],
                opts = {
                    data: data,
                    parent: elem,
                    type: 'states',
                    metric: 'RPV',
                    title: 'U.S. Distribution Per Visitor'
                },
                chart = cloudViz.choropleth(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.loadChoroplethGraph('#Chart');
        })
    })
    .controller('LoadDailySummaryCtrl', function($scope) {
        $scope.loadLineGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: -1
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    filled: false,
                    interactive: true,
                    autoResize: true
                },
                chart = cloudViz.line(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.graphData = s7report_data['daily_peak'];
            $scope.loadLineGraph('#daily_summary');
        })
    })
    .controller('LoadMonthlySummaryCtrl', function($scope) {
        $scope.loadLineGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: -1
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    filled: false,
                    interactive: true,
                    autoResize: true
                },
                chart = cloudViz.line(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.graphData = s7report_data['monthly_peak'];
            $scope.loadLineGraph('#monthly_summary');
        })
    })
    .controller('LoadRequestsSummaryCtrl', function($scope) {
        $scope.loadDountGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: 5
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    width: '100%',
                    height: '100%',
                    autoResize: true,
                    interactive: true,
                },
                chart = cloudViz.donut(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.graphData = s7report_data['request_types'];
            $scope.loadDountGraph('#requests_summary');
        })
    })
    .controller('LoadStreamSummaryCtrl', function($scope) {
        $scope.loadBarGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                d = $scope.graphData,
                data = d && rs2dv(d, {
                    displayCount: -1
                }) || {},
                opts = {
                    data: data,
                    dataAdapter: 'rs2dv',
                    parent: elem,
                    width: '100%',
                    height: '100%',
                    autoResize: true,
                    interactive: true,
                    position: 'stack'
                },
                chart = cloudViz.bar(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.graphData = s7report_data['stream'];
            $scope.loadBarGraph('#stream_summary');
        })
    })
    .controller('LoadDomainSummaryCtrl', function($scope) {
        $scope.loadChoroplethGraph = function(selector) {
            var container_width = $(selector).parent().width() + "px",
                container_height = $(selector).parent().width() * 0.35 + "px";
            var elem = d3.select(selector).style('width', container_width).style('height', container_height).node(),
                data = s7report_data['us_distribution'],
                opts = {
                    data: data,
                    parent: elem,
                    type: 'states',
                    metric: 'RPV',
                    title: 'U.S. Distribution Per Visitor'
                },
                chart = cloudViz.choropleth(opts);
            chart.render();
        };

        $scope.$on('$viewContentLoaded', function(event) {
            $scope.loadChoroplethGraph('#domain_summary');
        })
    });
