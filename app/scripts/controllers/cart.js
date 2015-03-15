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

    // updates items price in cart
    $scope.updateCartItem = function(item) {
      $scope.updateItemPrice(item);
    };

    // firebase methods

    $scope.addItemToCart = function(item, $index) {
      $scope.cartItems.$add({
        name: $scope.items[$index].name,
        amount: $scope.items[$index].amount,
        price: $scope.items[$index].price,
        totalprice: $scope.items[$index].totalprice
      });
    };

  });
