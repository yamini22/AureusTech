var app = angular.module('HRModule', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: "templates/home.html"
    };

    var login = {
        name: 'login',
        url: '/login',
        templateUrl: "templates/login.html"
    };

    var newAccount = {
        name: 'newAccount',
        url: '/newAccount',
        templateUrl: "templates/newAccount.html"
    };

    $stateProvider.state('home',home);
    $stateProvider.state('login',login);
    $stateProvider.state('newAccount',newAccount);
});
