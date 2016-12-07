'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .factory('httpinterceptor', ['$q', function($q) {  
      return {
        responseError: function(response) {
            if (response.status == 401 || response.data.status == 401){
                localStorage.clear();
                window.location = '/';
            }
            return $q.reject(response);
        },
        request : function (req) {
          console.log(req)
          if (localStorage.getItem('admin')) {
            console.log(req)
            req.headers['Authorization'] = "Bearer" + JSON.parse(localStorage.getItem('user')).token;
            console.log(JSON.parse(localStorage.getItem('admin')).token)
          }
          return req;
        },
      }
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
