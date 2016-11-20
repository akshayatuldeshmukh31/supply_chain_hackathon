var angular = require('angular');

angular.module('portApp')
.component('mto', {
    templateUrl: 'app/portal/mto/mto.html',
    controller: function($http, $scope) {
        this.container = undefined;
        this.searched = true;
        this.makeAppointment = true;
        this.detailsWidth = this.makeAppointment ? 'col-xs-6': 'col-xs-12';

        $http.post('http://localhost:3000/portadmin/pendingApprovals', {token: authService.getToken()}).then(function(response) {
            $scope.exports = response.data;
        }, function(response) {
            console.error('F!');
        });

        $http.post('http://localhost:3000/portadmin/pendingApprovals', {token: authService.getToken()}).then(function(response) {
            $scope.imports = response.data;
        }, function(response) {
            console.error('F!');
        });

    },
    bindings: {
        makeAppointment: '<'
    }
});
