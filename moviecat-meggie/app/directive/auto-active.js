(function(angular){
    var app=angular.module('moviecat.auto-active',[]);
    app.directive('autoActive',['$location',function($location){
        return {
            link:function(scope,element,attributes){
                // element.on('click',function(){
                //     element.parent().children().removeClass('active');
                //     element.addClass('active');
                // })

                scope.location=$location;
                scope.$watch('location.url()',function(now,old){
                    var aLink=element.children().attr('href').substr(1);
                    if(now.startsWith(aLink)){
                    element.parent().children().removeClass('active');
                    element.addClass('active');
                    }
                })
            }
        }
    }])
})(angular)