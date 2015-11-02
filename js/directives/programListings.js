app.directive("programListings", function(){
    return {
        restrict: 'E',
        scope: {
            listing: '='
        },
        templateUrl: 'js/directives/installApp.html'
    }
});