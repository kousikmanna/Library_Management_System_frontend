'use strict';
/**
 * @ngdoc function
 * @name frontendApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
   .controller('DashboardCtrl', function ($scope) {
  		$scope.books = [{name: "Five Point Someone", author: "Chetan Bhagat", availability: "unavailable", givenTo: {name: "someOne", email:"a@gmail.com"}}, {name: "Revolution 2020", author: "Chetan Bhagat", availability: "available", givenTo: {name: "someOne"}}];
	    $scope.addItem = function () {
	        $scope.errortext = "";
	        if (!$scope.addBook) {return;}
	        if (!$scope.addAuthor) {return;}
	       
	        var book = _.findWhere($scope.books, {name: $scope.addBook});
	        if(book == undefined){
	            var itemObj = {};
	            itemObj.name = $scope.addBook;
	            itemObj.author = $scope.addAuthor;
	            itemObj.availability = 'available';
	            $scope.books.push(itemObj);
	        } else {
	            $scope.errortext = "The item is already in your shopping list.";
	        }
	    }

	    $scope.removeItem = function (x) {
	        $scope.errortext = "";
	        $scope.products.splice(x, 1);
	    }

	    $scope.assignBook = function(book) {
	    	$scope.book = book;
	    }
   		
  });
