'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
    'ui.bootstrap',
    'ui.router',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]);

myApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

myApp.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/report");
    // Now set up the states
    $stateProvider
        .state('report', {
            abstract: true,
            url: "/report",
            views: {
                "": {
                    templateUrl: "partials/main.html"
                }
            },
            controller: 'TabsCtrl'
        })
        .state('report.summary', {
            abstract: true,
            url: "",
            views: {
                "": {
                    templateUrl: "partials/report/summary.html"
                }
            }
        })
        .state('report.summary.load', {
            url: "",
            views: {
                "daily-summary": {
                    templateUrl: "partials/report/summary/summary-daily.html",
                    controller: 'LoadDailySummaryCtrl'
                },
                "monthly-summary": {
                    templateUrl: "partials/report/summary/summary-monthly.html",
                    controller: 'LoadMonthlySummaryCtrl'
                },
                "requests-summary": {
                    templateUrl: "partials/report/summary/summary-requests.html",
                    controller: 'LoadRequestsSummaryCtrl'
                },
                "stream-summary": {
                    templateUrl: "partials/report/summary/summary-stream.html",
                    controller: 'LoadStreamSummaryCtrl'
                },
                "domain-summary": {
                    templateUrl: "partials/report/summary/summary-domain.html",
                    controller: 'LoadDomainSummaryCtrl'
                }
            }
        })
        .state('report.daily', {
            url: "/daily",
            views: {
                "": {
                    templateUrl: "partials/report/daily.html",
                    controller: 'LoadDailyCtrl'
                }
            }
        })
        .state('report.monthly', {
            url: "/monthly",
            views: {
                "": {
                    templateUrl: "partials/report/monthly.html",
                    controller: 'LoadMonthlyCtrl'
                }
            }
        })
        .state('report.requests', {
            url: "/requests",
            views: {
                "": {
                    templateUrl: "partials/report/requests.html",
                    controller: 'LoadRequestsCtrl'
                }
            }
        })
        .state('report.stream', {
            url: "/stream",
            views: {
                "": {
                    templateUrl: "partials/report/stream.html",
                    controller: 'LoadStreamCtrl'
                }
            }
        })
        .state('report.domain', {
            url: "/domain",
            views: {
                "": {
                    templateUrl: "partials/report/domain.html",
                    controller: 'LoadDomainCtrl'
                }
            }
        })
});


// myapp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/reports', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//   $routeProvider.otherwise({redirectTo: '/reports'});
// }]);
