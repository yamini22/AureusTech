app.controller('userLoginCtrl', function($scope, $state){

    $scope.trigger = function(item){
        $state.go(item);
    }
});
