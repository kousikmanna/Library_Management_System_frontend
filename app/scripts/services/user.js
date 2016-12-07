'use strict';

angular.module('frontendApp')
  .service('UserService', function ($q, $http, $resource, $rootScope) {
    this.userLogin = function (user) { 
      var deferred = $q.defer();  
      $http.post('/api/admin/login', user)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
          deferred.reject(err);
        
      });
      return deferred.promise;
    };

    this.getBook = function () { 
      var deferred = $q.defer();  
      $http.get('/api/book/list')
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
          deferred.reject(err);
        
      });
      return deferred.promise;
    };
    
    this.addBook = function (book) { 
      var deferred = $q.defer();  
      $http.post('/api/book/add', book)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
          deferred.reject(err);
        
      });
      return deferred.promise;
    };
    
    this.deleteBook = function (book) { 
      var deferred = $q.defer();  
      $http.put('/api/book/delete', book)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
          deferred.reject(err);
        
      });
      return deferred.promise;
    };

    this.updateBook = function (book) { 
      var deferred = $q.defer();  
      $http.put('/api/book/update', book)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
          deferred.reject(err);
        
      });
      return deferred.promise;
    };

    this.assignBook = function (assign) { 
      var deferred = $q.defer();  
      $http.put('/api/book/assign', book)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
          deferred.reject(err);
        
      });
      return deferred.promise;
    };

 }); 