var angular = require('angular');

angular.module('portApp')
.component('register', {
    templateUrl: 'app/home/register/register.html',
    controller: function($http, $scope) {
        $scope.registerUser = function() {
             $http.post("http://localhost:3000/register", {
                userName: $scope.username,
                password: $scope.password,
                role: $scope.role,
                pointOfContact: $scope.fullName,
                email: $scope.email,
                companyName: $scope.companyName
            }).then(function(response) {
                alert('YAY!');
            }, function(response) {
                 alert('NAY!');
            });
        };
    }
});
