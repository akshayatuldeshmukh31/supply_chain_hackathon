var angular = require('angular');

angular.module('portApp')
.component('mto', {
    templateUrl: 'app/portal/mto/mto.html',
    controller: function($http, $scope) {
        this.container = undefined;
        this.searched = true;
        this.makeAppointment = true;
        this.detailsWidth = this.makeAppointment ? 'col-xs-6': 'col-xs-12';

    },
    bindings: {
        makeAppointment: '<'
    }
});