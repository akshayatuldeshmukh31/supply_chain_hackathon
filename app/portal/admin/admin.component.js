var angular = require('angular');

angular.module('portApp')
.component('admin', {
    templateUrl: 'app/portal/admin/admin.html',
    controller: function($http, $scope) {
        this.container = undefined;
        this.searched = true;
        this.makeAppointment = true;
        this.detailsWidth = this.makeAppointment ? 'col-xs-6': 'col-xs-12';

        $http.get('http://localhost:3000/***').then(function(response) {
            console.log(response.data);
        }).then(function(response) {
            console.error('F!');
        });
    },
    bindings: {
        makeAppointment: '<'
    }
});