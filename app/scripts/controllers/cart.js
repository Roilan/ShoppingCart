'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('ShoppingCartController', function ($scope) {
    // log
    $scope.log = function() {
      console.log($scope.cartItems);
    };

    // cart status - currently static
    $scope.status = 'Open';

    // product items
    $scope.items = [
      {
        name: 'Food',
        amount: 0,
        price: 9.99
      },
      {
        name: 'Accessories',
        amount: 0,
        price: 10.99
      },
      {
        name: 'Care',
        amount: 0,
        price: 11.01
      }
    ];

    // cart items
    $scope.cartItems = [];

    // clear cart items
    $scope.clearCartItems = function() {
      $scope.cartItems = [];
    };

    // pushes item into the cart
    $scope.addToCart = function(item) {
      $scope.cartItems.push(item);
    };

    // removes item from cartItems array
    $scope.removeCartItem = function($index) {
      $scope.cartItems.splice($index, 1);
    };
  });
