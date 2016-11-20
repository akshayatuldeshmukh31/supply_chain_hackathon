var angular = require('angular');

angular.module('portApp')
.component('store', {
    templateUrl: 'app/portal/store/store.html',
    controller: function($scope, $http, authService) {
        $scope.searched = false;
        $scope.getDetails = function(){
            $http.post("http://localhost:3000/portmto/postArrivals", {
                'billOfLading#': $scope.ladingno,
                token: authService.getToken()
            }).then(function(response) {
                $scope.details = response.data;
                $scope.searched = true;
            }, function(response) {
                 alert('NAY!');
            });

        }


    },
    bindings: {
        makeAppointment: '<'
    }
});
