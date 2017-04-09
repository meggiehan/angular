(function(angular){
    var app=angular.module('moviecat.home_page',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
        templateUrl:'/moviecat-meggie/app/home_page/view.html'
        })
    }])
})(angular)