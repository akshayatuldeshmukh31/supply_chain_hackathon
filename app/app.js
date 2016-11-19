var angular = require('angular');

require('angular-ui-router');

var app = angular.module('portApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
        });
        
        $stateProvider.state('home.drayage', {
            url: '/drayage',
            templateUrl: 'app/home/drayage/drayage.html'
        });
        
        $stateProvider.state('home.register', {
            url: '/register',
            templateUrl: 'app/home/register/register.html'
        });
    }
]);