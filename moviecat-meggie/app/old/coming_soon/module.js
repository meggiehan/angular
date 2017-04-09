(function(angular){
     var app=angular.module('moviecat.coming_soon',['ngRoute']);

    app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/coming_soon',{
        templateUrl:'coming_soon/view.html',
        controller:'coming_soonController'
    });
    }]);

     app.controller('coming_soonController',['$scope',function($scope){

     }]);
})(angular)