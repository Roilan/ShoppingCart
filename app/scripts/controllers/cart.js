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
        name: 'item1',
        amount: 0,
        price: 9.99
      },
      {
        name: 'item2',
        amount: 0,
        price: 10.99
      },
      {
        name: 'item3',
        amount: 0,
        price: 11.01
      }
    ];

    // cart items
    $scope.cartItems = [];

    // pushes item into the cart
    $scope.addToCart = function(item) {
      $scope.cartItems.push(item);
    };
  });
