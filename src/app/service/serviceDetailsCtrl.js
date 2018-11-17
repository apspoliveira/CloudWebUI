angular.module('app.service').controller('ServiceDetailsCtrl', ['$rootScope', '$scope', '$routeParams', 'serviceService', function($rootScope, $scope, $routeParams, serviceService) {
	  
	    $scope.serviceId = $routeParams.serviceId;
	    
	    $scope.id = '';
	    $scope.url = '';
	    $scope.label = '';
	    $scope.provider = '';
	    $scope.description = '';
	    $scope.long_description = '';
	    $scope.version = '';
	    $scope.info_url = '';
	    $scope.active = '';
	    $scope.bindable = '';
	    $scope.extra = '';
	    $scope.documentation_url = '';
	    $scope.service_broker_guid = '';
	    $scope.plan_updateable = '';

	    window.alert($scope.serviceId);
	    
	    $scope.getService = function() {
		serviceService.getService($scope.serviceId).then(function(response) {
			
			var data = response.data;
			      
			$scope.id = data.metadata.guid;
			$scope.url = data.metadata.url;
			$scope.label = data.entity.label;
			$scope.provider = data.entity.provider;
			$scope.description = data.entity.description;
			$scope.long_description = data.entity.long_description;
			$scope.version = data.entity.version;
			$scope.info_url = data.entity.info_url;
			$scope.active = data.entity.active;
			$scope.bindable = data.entity.bindable;
			$scope.extra = data.entity.extra;
			$scope.documentation_url = data.entity.documentation_url;
			$scope.service_broker_guid = data.entity.service_broker_guid;
			$scope.plan_updateable = data.entity.plan_updateable
			
		
		    }, function(err) {
			window.alert(err);
		    });
            }
	    
	    $scope.getService();
	}])