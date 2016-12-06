'use strict';

angular.module('frontendApp')
  .service('UserService', function ($q, $http, $resource, $rootScope) {

    this.userLogin = function (user) { 
      var timeout = $q.defer(),
          timedOut = false;    
      setTimeout(function () {
          timedOut = true;
          timeout.resolve();
      }, (30000));
      var deferred = $q.defer();  
      $http.post('/api/user/login', user,{timeout : timeout.promise})
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err) {
        if (timedOut) {
            deferred.reject({
                timeout: 'timeout',
                message: 'Request took longer than  seconds.'
            });
        }else{
          deferred.reject(err);
        }
      });
      return deferred.promise;
    };

 }); 