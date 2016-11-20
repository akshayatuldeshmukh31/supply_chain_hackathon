var angular = require('angular');

angular.module('portApp')
.component('labor', {
    templateUrl: 'app/portal/labor/labor.html',
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