'use strict';

/* Controllers */

angular.module('catharsisApp.controllers', []).
  controller('MovieListController', [function() {

    $scope.movies = [
        {title:'Little Big Man', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/tWP2LoaMRjX3Y4dDOSwE2prN423.jpg',date:'1970-12-14'},
        {title:'On the Waterfront', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/zXp2ydvhO9qGzpIsb1CWeKnn5yg.jpg',date:'1954-07-28'},
        {title:'Princess Mononoke', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/dB2rATwfCbsPGfRLIoluBnKdVHb.jpg',date:'1997-07-12'},
        {title:'Crying Freeman', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/9a4il5LEio4cEgbAgJe8fkJfBYB.jpg',date:'1995-09-13'},
        {title:'The Notebook', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/qsyf0GobJbE4k5ljOPTQWT8fmAx.jpg',date:'2004-06-25'},
        {title:'Redline', imgUrl:'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/kFh9LOeCEiPeSWJToPwoVvPApFc.jpg',date:'2009-08-14'}
    ];

  // }])
  // .controller('MyCtrl2', [function() {

  }]);
