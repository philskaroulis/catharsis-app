'use strict';

/* Controllers */

angular.module('catharsisApp.controllers', []).
    controller('MovieListController', ['$scope',function($scope) {

        $scope.movies = [

            {title:'Little Big Man', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/tWP2LoaMRjX3Y4dDOSwE2prN423.jpg',date:'1970-12-14',added:false},
            {title:'On the Waterfront', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/zXp2ydvhO9qGzpIsb1CWeKnn5yg.jpg',date:'1954-07-28',added:false},
            {title:'Princess Mononoke', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/dB2rATwfCbsPGfRLIoluBnKdVHb.jpg',date:'1997-07-12',added:false},

            {title:'Death Wish', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/motRXAGirCsQArcQICxoI8pZ5pQ.jpg',date:'1974-07-24',added:false},
            {title:'The Notebook', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/qsyf0GobJbE4k5ljOPTQWT8fmAx.jpg',date:'2004-06-25',added:false},
            {title:'Redline', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/kFh9LOeCEiPeSWJToPwoVvPApFc.jpg',date:'2009-08-14',added:false},

            {title:'Days of Being Wild', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/8SSIVqKnjv7UGITEemFwEQ0j9iS.jpg',date:'1990-12-15',added:false},
            {title:'Silverado', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/v6YHlUoqZsCyFnB8utdbWyTgWlW.jpg',date:'1985-07-10',added:false},
            {title:'Curse of the Golden Flower', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/4RUDmfAojukZ3QmKsoXnVHa6wmQ.jpg',date:'2006-12-21',added:false},

            {title:'Rocky Balboa', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/1hCngs2CrxCZaPTwvxT9le7lJbO.jpg',date:'2006-12-20',added:false},
            {title:'La Guerre Des Boutons', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/dty4DX4mrhGBs2GIyEpp6Gxk9PM.jpg',date:'1962-04-18',added:false},
            {title:'Jennifer 8', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/l9O3n1KF528SqPTzGrRjzYYgAS7.jpg',date:'1992-11-06',added:false}

        ];

        $scope.toggleMembership = function(movie) {
            movie.added = !movie.added;
        };

    }]).
    controller('TopBarController', ['$scope',function($scope) {

        $scope.titleStyle = 'display:none';

        $scope.setTitle = function(genre,keyword) {
            $scope.genre = ' :: ' + genre;
            $scope.keyword =' :: ' + keyword;
            $scope.titleStyle = 'display:inline';
        };

    }]).
    controller('PlaylistController', ['$scope',function($scope) {

        $scope.playlistSize = 0;

    }]);
