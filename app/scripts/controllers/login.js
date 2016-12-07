'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, UserService) {
     
     $scope.login = function (user) {

     	// $location.path('/dashboard');
     	if(user.email && user.password) {
            UserService.userLogin(user)
			.then(function(response){
				var token = response.token;
                localStorage.setItem('token', token);
                delete response.token;
                var admin = JSON.stringify(response);
                localStorage.setItem('admin', admin);
                $scope.admin = response;
				$location.path('/dashboard');
			}).catch(function(err){
				$scope.error = err.message;
				alert("Login is not successfully done");
			});
        }else{
        	alert("Please fill all the fields");
        }
     }
  });
