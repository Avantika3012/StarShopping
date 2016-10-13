var app = angular.module('MeanApp' , ["ngRoute"])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/login.html',
        controller: 'LoginController'
      })
      .when('/home', {
        templateUrl: 'html/home.html',
        controller: 'HomeController'
      })
      .when('/search', {
        templateUrl: 'html/search.html',
        controller: 'SearchController'
      })
});