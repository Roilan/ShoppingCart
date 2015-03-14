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
        price: 9.99,
        totalprice: 0
      },
      {
        name: 'Accessories',
        amount: 0,
        price: 10.99,
        totalprice: 0
      },
      {
        name: 'Care',
        amount: 0,
        price: 11.99,
        totalprice: 0
      }
    ];

    // cart items
    $scope.cartItems = [];

    // clear cart items
    $scope.clearCartItems = function() {
      $scope.cartItems = [];
    };

    // calculates item total
    $scope.calculateItemTotal = function(item) {
      var totalPrice = item.amount * item.price;
      return parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
    };

    // using $index caused an error if items were added out of order
    // when price was removed and re-added/updated
    // to avoid this, grabs the index of the current item
    $scope.itemIndex = function(item) {
      return $scope.cartItems.indexOf(item);
    };

    // updates item price in cart
    $scope.updateItemPrice = function(item) {
      $scope.cartItems[$scope.itemIndex(item)].totalprice = $scope.calculateItemTotal(item);
    };

    // pushes item into the cartItems array
    $scope.addToCart = function(item) {
      $scope.cartItems.push(item);
      $scope.updateItemPrice(item);
    };

    // removes item from cartItems array
    $scope.removeCartItem = function($index) {
      $scope.cartItems.splice($index, 1);
    };

    // updates items price in cart
    $scope.updateCartItem = function(item) {
      $scope.updateItemPrice(item);
    };

  });
