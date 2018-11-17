angular.module('app.serviceBinding').controller('ServiceBindingPreviewCtrl', ['$rootScope', '$scope', '$routeParams', 'serviceBindingService', function($rootScope, $scope, $routeParams, serviceBindingService) {
	    window.alert('Service Binding Preview ctrl');
	    
	    $scope.id = '';
	    $scope.url = '';
	    
	    $scope.application_id = '';
	    $scope.service_instance_id = '';
	    $scope.credentials = '';
	    $scope.gateway_data = '';
	    $scope.gateway_name = '';
	    $scope.syslog_drain_url = '';
	      
	    $scope.name = '';
	    $scope.last_operation_type = '';
	    $scope.last_operation_state = '';
	    $scope.last_operation_description = '';
	    
	    $scope.nrOfServiceBindings = 0;
	    $scope.serviceBindings = [];
	    
	    serviceBindingService.getServiceBindings().then(function(response) {
                    window.alert('get service bindings');
		    
		    var data = response.data;
		    $scope.nrOfServiceBindings = data.total_results;
		    
		    // create serviceBinding objects                            
		    angular.forEach(data.resources, function(serviceBinding, i) {
			    window.alert('get service binding');
			    
			    var objectServiceBinding = {
				id: serviceBinding.metadata.guid,
				url: serviceBinding.metadata.url,
				application_id: serviceBinding.entity.app_guid,
				service_instance_id: serviceBinding.entity.service_instance_guid,
				gateway_data: serviceBinding.entity.gateway_data,
				gateway_name: serviceBinding.entity.gateway_name, 
				syslog_drain_url: serviceBinding.entity.syslog_drain_url,
				name: serviceBinding.entity.name
			    }
			    
			    $scope.serviceBindings.push(objectServiceBinding);
			});
		}, function (err, status) {
		    window.alert(err);
		});

	    $scope.getServiceBinding = function(id) {


	    }

	    
	}]);