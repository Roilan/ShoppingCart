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
    // cart status - currently static
    $scope.status = 'Open';

    // cart items
    $scope.items = [
      {
        name: 'item1',
        amount: 10,
        price: 9.99
      },
      {
        name: 'item2',
        amount: 5,
        price: 10.99
      },
      {
        name: 'item3',
        amount: 100,
        price: 11.01
      }
    ];
  });
