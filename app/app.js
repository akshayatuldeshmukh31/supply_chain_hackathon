var angular = require('angular');

require('angular-material');
require('angular-ui-router');

var app = angular.module('portApp', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider.state('home', {
            url: '/'
        });
    }
]);