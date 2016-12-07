'use strict';
/**
 * @ngdoc function
 * @name frontendApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
   .controller('DashboardCtrl', function ($scope, $rootScope, $location, UserService) {
  		$scope.books = [{name: "Five Point Someone", author: "Chetan Bhagat", availability: "unavailable", user: {name: "someOne", email:"a@gmail.com"}}, {name: "Revolution 2020", author: "Chetan Bhagat", availability: "available"}];
	    UserService.getBook()
		.then(function(response){
		    $scope.books = response;	
		}).catch(function(err){
			$scope.error = err.message;
		});
	    $scope.addItem = function () {
	        $scope.errortext = "";
	        if (!$scope.book.name) {return;}
	        if (!$scope.book.author) {return;}
	       
	        // var book = _.findWhere($scope.books, {name: $scope.book.name});
	        // if(book == undefined){
	            // var itemObj = {};
	            // itemObj.name = $scope.book.name;
	            // itemObj.author = $scope.book.author;
	            // itemObj.availability = 'available';
	            // $scope.books.push(itemObj);
	        // } else {
	        //     $scope.errortext = "The item is already in your shopping list.";
	        // }
	        var itemObj = {};
            itemObj.name = $scope.book.name;
            itemObj.author = $scope.book.author;
            itemObj.availability = 'available';
	        UserService.addBook(itemObj)
			.then(function(response){
				$scope.books.push(itemObj);
			}).catch(function(err){
				$scope.error = err.message;
			});

	    }

		$scope.updateBook = function (book) {
	        $scope.errortext = "";
	        if (!$scope.book.availability) {return;}
	        UserService.updateBook(book)
			.then(function(response){
				$scope.message = 'book is updated';
				console.log('book is updated');
			}).catch(function(err){
				$scope.error = err.message;
			});

	    }


	    $scope.removeItem = function (book) {
	        $scope.errortext = "";
	        $scope.books = _.without($scope.books, _.findWhere($scope.books, {name: book.name}));

	        UserService.deleteBook(book)
			.then(function(response){
				$scope.message = 'book is deleted';
			}).catch(function(err){
				$scope.error = err.message;
			});
	    }

	    $scope.assign = function(book) {
	    	$scope.book = book;
	    }
	    
	    $scope.assignBook = function(user) {
	    	var assignObj= {};
	    	assignObj.book = book;
	    	assignObj.user = user;
	    	assignObj.type = 'borrow';
	    	assignObj.dueDate = $scope.dueDate;
	   		UserService.assignBook(assignObj)
			.then(function(response){
				$scope.message = 'book is assigned';
			}).catch(function(err){
				$scope.error = err.message;
			});
	    }

	    $scope.returnBook = function(book) {
	    	var assignObj= {};
	    	assignObj.user = book.user;
	    	assignObj.type="return";
	    	assignObj.book = book;
	   		UserService.assignBook(assignObj)
			.then(function(response){
				$scope.message = 'book is assigned';
			}).catch(function(err){
				$scope.error = err.message;
			});

	    }


   		
  });
