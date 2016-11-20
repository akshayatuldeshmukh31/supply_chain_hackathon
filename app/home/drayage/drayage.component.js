var angular = require('angular');

angular.module('portApp')
.component('drayage', {
    templateUrl: 'app/home/drayage/drayage.html',
    controller: function($scope, $http) {
        this.container = undefined;
        this.searched = true;
        this.makeAppointment = true;
        this.detailsWidth = this.makeAppointment ? 'col-xs-6': 'col-xs-12';
    },  
    bindings: {
        makeAppointment: '<'
    }
});