var DashboardApp = angular.module('DashboardApp', ['ngRoute', 'ngResource', 'uiGmapgoogle-maps']);

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



// DashboardApp.factory('', function($resource){
//     return $resource('');
// });

