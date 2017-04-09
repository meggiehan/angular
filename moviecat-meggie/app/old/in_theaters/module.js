(function(angular){
     var app=angular.module('moviecat.in_theaters',['ngRoute','moviecat.myjsonp']);

    app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/in_theaters/:page?',{
        templateUrl:'in_theaters/view.html',
        controller:'in_theatersController'
    });
    }]);

     app.controller('in_theatersController',['$scope','$http','$routeParams','$route','MyJsonp',function($scope,$http,$routeParams,$route,MyJsonp){

        // console.log(123);
        // $scope.data=
        // $http.get('./in_theaters/in_theaters.json').then(function(res){
        //     //成功的回调函数
        //     console.log(res);
        //     $scope.data = res.data;
        // },function(){
        //     //失败的回调函数
        // })
        // $http.jsonp('?callback=JSON_CALLBACK')
        // console.log(MyJsonp);
        //使用自己封装的jsonp来进行跨域请求
        $scope.pageSize=5;
        $scope.nowpage=($routeParams.page || '1')-0;
        var start=($scope.nowpage-1)*$scope.pageSize;
        MyJsonp.jsonp('http://api.douban.com/v2/movie/in_theaters',{start:start,count:$scope.pageSize},function(data){
            $scope.data=data;
            $scope.total=data.total;
            $scope.totalPage=Math.ceil(data.total/$scope.pageSize);
            $scope.$apply();
        });
        $scope.goPage=function(newPage){
            if(newPage<1 || newPage>$scope.totalPage){
                return;
            }
            $route.updateParams({page:newPage});
        }
     }]);
})(angular)