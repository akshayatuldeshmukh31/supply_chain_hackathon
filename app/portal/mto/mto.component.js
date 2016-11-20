var angular = require('angular');

angular.module('portApp')
.component('mto', {
    templateUrl: 'app/portal/mto/mto.html',
    controller: function($http, $scope, authService) {
        this.container = undefined;
        this.searched = true;
        this.makeAppointment = true;
        this.detailsWidth = this.makeAppointment ? 'col-xs-6': 'col-xs-12';

        $http.post('http://localhost:3000/portmto/viewData', {token: authService.getToken()}).then(function(response) {
            $scope.exports = response.data.exportInfo;
            $scope.imports = response.data.importInfo;
            console.log($scope.exports);
        }, function(response) {
            console.error('F!');
        });

        $scope.hasArrived = function(){
         $http.post("http://localhost:3000/portmto/postArrivals", {
                vesselName: $scope.shipArrived,
                arrivingTerminal: $scope.shipTerminal,
                token: authService.getToken()
            }).then(function(response) {
                alert('YAY!');
            }, function(response) {
                 alert('NAY!');
            });
        };

    },
    bindings: {
        makeAppointment: '<'
    }
});
