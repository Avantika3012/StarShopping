var app = angular.module('MeanApp' , ['ngRoute', 'LocalStorageModule'])
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
      .when('/customerHome', {
        templateUrl: 'html/customerHome.html',
        controller: 'CustomerHomeController'
      })    
      .when('/buyProduct', {
        templateUrl: 'html/buyProduct.html',
        controller: 'BuyProductController'
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
