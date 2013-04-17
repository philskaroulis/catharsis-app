'use strict';


// Declare app level module which depends on filters, and services
angular.module('catharsisApp', ['catharsisApp.filters', 'catharsisApp.services', 'catharsisApp.directives', 'catharsisApp.controllers']).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/movies/guys/fights', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/guys/carchases', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/guys/robberies', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/guys/war', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/guys/sports', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/guys/westerns', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});

    $routeProvider.when('/movies/ladies/musicals', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/ladies/comedy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/ladies/romance', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/ladies/adventure', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/ladies/drama', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/ladies/spituality', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});

    $routeProvider.when('/movies/kids/animation', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/kids/adventure', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/kids/fantasy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/kids/scifi', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/kids/mystery', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/kids/comedy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});

    $routeProvider.when('/movies/adults/drama', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/adults/adventure', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/adults/fantasy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/adults/scifi', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/adults/westerns', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/adults/comedy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});

    $routeProvider.when('/movies/family/family', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/family/adventure', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/family/fantasy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/family/scifi', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/family/mystery', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});
    $routeProvider.when('/movies/family/comedy', {templateUrl: 'partials/movie-list.html', controller: 'MovieListController'});

    $routeProvider.otherwise({redirectTo: '/'});

  }]);
