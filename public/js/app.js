var app = angular.module('MeanApp' , ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/login.html',
        controller: 'LoginController'
      })
      .when('/adminHomeList', {
        templateUrl: 'html/adminProductList.html',
        controller: 'AdminProductListController'
      })
      .when('/adminNewProduct', {
        templateUrl: 'html/adminNewProductForm.html',
        controller: 'AdminProductController'
      })    
      .when('/home', {
        templateUrl: 'html/home.html',
        controller: 'HomeController'
      })
      .when('/search', {
        templateUrl: 'html/search.html',
        controller: 'SearchController'
      })
  })
