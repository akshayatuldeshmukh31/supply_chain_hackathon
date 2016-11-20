var angular = require('angular');

angular.module('portApp')
.component('drayage', {
    templateUrl: 'app/home/drayage/drayage.html',
    controller: function($scope, $http) {
        $scope.container = undefined;
        $scope.searched = true;
        $scope.makeAppointment = true;
        $scope.detailsWidth = $scope.makeAppointment ? 'col-xs-6': 'col-xs-12';
        $scope.search = function(){
            $http.post('http://localhost:3000/drayage/checkAvailability',{
                "container#" : $scope.containerno}).then(function(response) {
                $scope.details = response.data;
                if($scope.details.success == 1){
                    $scope.toggle = true;
                    $scope.searched = true;
                }
                else{
                    $scope.toggle = false;
                }
            }, function(response) {
                $scope.details = "";
            });
        }
    }
});
