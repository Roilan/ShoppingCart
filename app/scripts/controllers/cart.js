'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp.controllers', [])
  .controller('ShoppingCartController', function ($scope, $firebaseArray) {
    var firebaseRef = new Firebase('https://angularcart.firebaseio.com/cart');
    $scope.cartItems = $firebaseArray(firebaseRef);

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
        price: 9.99,
        amount: 0,
        totalprice: 0
      },
      {
        name: 'Accessories',
        price: 10.99,
        amount: 0,
        totalprice: 0
      },
      {
        name: 'Care',
        price: 11.99,
        amount: 0,
        totalprice: 0
      }
    ];

    // cart items
    //$scope.cartItems = [];

    // clear cart items
    $scope.clearCartItems = function() {
      $scope.cartItems = [];
    };

    // updates items price in cart
    $scope.updateItemPrice = function($index) {
      var amt = $scope.items[$index].amount;
      var price = $scope.items[$index].price;
      var totalPrice = amt * price;

      return parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2)
    };

    // firebase methods

    $scope.addItemToCart = function($index) {
      var totalPrice = $scope.updateItemPrice($index);

      $scope.cartItems.$add({
        name: $scope.items[$index].name,
        amount: $scope.items[$index].amount,
        price: $scope.items[$index].price,
        totalprice: totalPrice
      });
    };

  });
