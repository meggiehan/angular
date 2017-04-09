(function(angular){
     var app=angular.module('moviecat.top250',['ngRoute']);

    app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/top250',{
        templateUrl:'top250/view.html',
        controller:'top250Controller'
    });
    }]);

     app.controller('top250Controller',['$scope',function($scope){

     }]);
})(angular)