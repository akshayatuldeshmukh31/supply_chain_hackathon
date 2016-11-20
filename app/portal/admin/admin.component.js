var angular = require('angular');

angular.module('portApp')
.component('admin', {
    templateUrl: 'app/portal/admin/admin.html',
    controller: function($scope, $http, authService) {
        console.log('OMG');
        $http.post('http://localhost:3000/portadmin/pendingApprovals', {token: authService.getToken()}).then(function(response) {
            $scope.approvals = response.data.pendingApprovals;
        }, function(response) {
            console.error('F!');
        });

        $scope.approveUser = function(username){
             $http.post('http://localhost:3000/portadmin/pendingApprovals', {userName: username,token: authService.getToken()}).then(function(response) {
//            $scope.approvals = response.data.pendingApprovals;
        }, function(response) {
            console.error('F!');
        });
        }
    },
    bindings: {
        makeAppointment: '<'
    }
});
