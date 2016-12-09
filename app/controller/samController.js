angular.module('samController',[])

.controller('authCtrl',function($scope){
    $scope.menu=false;
    $("#modalLogin").modal('show');
})

.controller('dashboardCtrl',function($scope){
    $scope.menu=true;
})