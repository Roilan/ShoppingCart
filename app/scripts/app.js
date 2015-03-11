'use strict';

/**
 * @ngdoc overview
 * @name shoppingCartApp
 * @description
 * # shoppingCartApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingCartApp', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // redirect to home
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');

    // set states for shopping cart
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })

      .state('cart', {
        url: '/cart',
        controller: 'ShoppingCartController',
        templateUrl: 'views/cart.html'
      });

    // html5mode / hashbang
    $locationProvider.html5Mode(false);

  });

