'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller:'EditEventController'
            })
    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('MyCache', {capacity:3})
    });
