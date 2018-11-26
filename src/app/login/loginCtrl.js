angular.module('app')
    .controller('LoginCtrl', function($scope, $route, $location, authService) { 
	
	$scope.client_credentials = function() {
            authService.client_credentials().then(function(response) {
                $location.path('/');
            });
        }		
    });
