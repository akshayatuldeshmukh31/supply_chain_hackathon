var angular = require('angular');

angular.module('portApp')
.component('distributor', {
    templateUrl: 'app/portal/distributor/distributor.html',
    controller: function() {
        this.container = undefined;
        this.searched = true;
        this.makeAppointment = true;
        this.detailsWidth = this.makeAppointment ? 'col-xs-6': 'col-xs-12';

    },
    bindings: {
        makeAppointment: '<'
    }
});