var DashboardApp = angular.module('DashboardApp', ['ngRoute', 'ngResource', 'uiGmapgoogle-maps', 'chart.js']);

DashboardApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller:  'geospatialController',
        templateUrl: 'tmpl/geospatial.html'
    })
    .when('/keymetrics', {
        controller:  'keymetricsController',
        templateUrl: 'tmpl/keymetrics.html'
    })
    .when('/dataview', {
        controller:  'dataviewController',
        templateUrl: 'tmpl/dataview.html'
    })
    .otherwise({
        redirect: '/'
    });
    $locationProvider.html5Mode(true);
});



DashboardApp.factory('Locations', function($resource){
    return $resource('https://udacity-5c1b2.firebaseio.com/Locations.json');
});

DashboardApp.factory('ReportedIssues', function($resource){
    return $resource('https://udacity-5c1b2.firebaseio.com/KeyMetrics/Reported%20Issues.json');
});

DashboardApp.factory('Customers', function($resource){
    return $resource('https://udacity-5c1b2.firebaseio.com/KeyMetrics/Customers.json');
});

