'use strict';


// Declare app level module which depends on filters, and services
angular.module('catharsisApp', ['catharsisApp.filters', 'catharsisApp.services', 'catharsisApp.directives', 'catharsisApp.controllers']).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/movies/guys/fights', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.otherwise({redirectTo: '/'});

  }]);
