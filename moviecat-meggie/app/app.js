(function (angular) {
    // "use strict";

    // start your ride
    var app=angular.module('moviecat',['moviecat.details','moviecat.home_page','moviecat.movie_list','moviecat.auto-active']);
    app.controller('mainController',['$scope','$location',function($scope,$location){
        $scope.query='';
        $scope.search=function(){
            $location.url('/search/?q='+$scope.query);
             // $route.updateParams({q:$scope.query,movietype:'search'});
        }
    }])

})(angular);