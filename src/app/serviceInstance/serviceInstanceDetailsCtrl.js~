angular.module('app.serviceInstance').controller('ServiceInstanceDetailsCtrl', ['$rootScope', '$scope', '$routeParams', '$log', 'serviceInstanceService'/*, 'messageService'*/, function($rootScope, $scope, $routeParams, $log, serviceInstanceService/*, messageService*/) {
	    
	    window.alert('service instance details');
	    
	    window.alert($routeParams.serviceInstanceId);
	    $scope.id = $routeParams.serviceInstanceId;
	    
	    $scope.service_instance_parameters_url = '';
	    $scope.shared_to_url = '';
	    $scope.shared_from_url = '';
	    $scope.routes_url = '';
	    $scope.service_keys_url = '';
	    $scope.service_bindings_url = '';
	    $scope.service_plan_url = '';
	    $scope.service_url = '';
	    $scope.space_url = '';
	    $scope.tags = [];
	    $scope.last_operation_type = '';
	    $scope.last_operation_state = '';
	    $scope.last_operation_description = '';
	    $scope.last_operation_created_at = '';
	    $scope.last_operation_updated_at = '';
	    $scope.type = '';
	    $scope.dashboard_url = '';
	    $scope.gateway_data = '';
	    $scope.space_guid = '';
	    $scope.service_plan_guid = '';
	    $scope.service_guid = '';
	    $scope.credentials_creds_key_38 = '';
	    $scope.name = '';
	    $scope.guid = '';
	    $scope.url = '';
	    $scope.created_at = '';
	    $scope.updated_at = '';
	    
	    $scope.routes = [];
            $scope.nrOfRoutes = 0;
	    
	    $scope.serviceBindings = [];
            $scope.nrOfServiceBindings = 0;
	    
	    $scope.serviceKeys = [];
            $scope.nrOfServiceKeys = 0;

	    $scope.permissions = [];

	    $scope.sharedFrom = [];

	    $scope.sharedTo = [];
	    
	    $scope.getServiceInstance = function () {
		window.alert('get service instance ' + $scope.id);
		var getServiceInstancePromise = serviceInstanceService.getServiceInstance($scope.id);                                                                      
		window.alert('get service instance promise');
                getServiceInstancePromise.then(function(response) {   
			window.alert('get service instance: ' + response.data.entity.name);
			$scope.guid = response.data.metadata.guid;                 
			$scope.url = response.data.metadata.url;
			$scope.created_at = response.data.metadata.created_at;
			$scope.updated_at = response.data.metadata.updated_at;
			$scope.name = response.data.entity.name;
			$scope.credentials = response.data.entity.credentials.creds-key-38;
			$scope.service_guid = response.data.entity.service_guid;
			$scope.service_plan_guid = response.data.entity.service_plan_guid;
			$scope.space_guid = response.data.entity.space_guid;
			$scope.gateway_data = response.data.entity.gateway_data;
			$scope.dashboard_url = response.data.entity.dashboard_url;
			$scope.type = response.data.entity.type;
			$scope.last_operation_type = response.data.entity.last_operation.type;
			$scope.last_operation_state = response.data.entity.last_operation.state;
			$scope.last_operation_description = response.data.entity.last_operation.description;
			$scope.last_operation_updated_at = response.data.entity.last_operation.updated_at;
			$scope.last_operation_created_at = response.data.entity.last_operation.created_at;
			$scope.tags = response.data.entity.tags;
			$scope.space_url = response.data.entity.space_url;
			$scope.service_url = response.data.entity.service_url;
			$scope.service_plan_url = response.data.entity.service_plan_url;
			$scope.service_bindings_url = response.data.entity.service_bindings_url;
			$scope.service_keys_url = response.data.entity.service_keys_url;
			$scope.routes_url = response.data.entity.routes_url;
			$scope.shared_from_url = response.data.entity.shared_from_url;
			$scope.shared_to_url = response.data.entity.shared_to_url;
			$scope.service_instance_parameters_url = response.data.entity.service_instance_parameters_url;			
			    
		    }, function(err) {
			window.alert(err.data.code + ' ' + err.data.description);
			$log.error(err);
		    });
	    };
	    $scope.getServiceInstance();
	
	    // api                                                       
	    $scope.getRoutesForTheServiceInstance = function() {
		var getServiceInstancePromise = serviceInstanceService.getRoutesForServiceInstance($scope.id);
                //window.alert(getServiceInstancePromise);                                           
                var promises = [];
                q = getServiceInstancePromise.then(function(response) {
                        window.alert('populate routes: '+response.data.total_results);
			// populate routes                                                 
                        if (response.data.resources && response.data.resources.length > 0) {
                            $scope.nrOfRoutes = response.data.resources.length;
                            $scope.routes = response.data.resources;
                            angular.forEach(response.data.resources, function(route, i) {        
                                                            
                                    var objectRoute = {
                                        id: route.metadata.guid,
					url: route.metadata.url,
					created_at: route.metadata.created_at,
					updated_at: route.metadata.updated_at,
					host: route.entity.host,
					path: route.entity.path,
					domain_guid: route.entity.domain_guid,
					space_guid: route.entity.space_guid,
					service_instance_guid: route.entity.service_instance_guid,
					port: route.entity.port,
					domain_url: route.entity.domain_url,
					space_url: route.entity.space_url,
					service_instance_url: route.entity.service_instance_url, 
					apps_url: route.entity.apps_url,
					route_mappings_url: route.entity.route_mappings_url
                                    };

				    $scope.routes.push(objectRoute);
				});                                                         
                        }            
		    }, function(err) {                                     
			window.alert('Routes were not loaded.');
                        $log.error(err.data.description);
                    });                                             
                return q;	       
	    }
	    $scope.getRoutesForTheServiceInstance();

	    // api                                                                          
	    $scope.getServiceBindingsForTheServiceInstance = function() {
		var getServiceInstancePromise = serviceInstanceService.getServiceBindingsForServiceInstance($scope.id);   
		
                var promises = [];
                q = getServiceInstancePromise.then(function(response) {
			window.alert('service bindings ' + response.data.resources.length);
			// populate service bindings                                        
			if (response.data.resources && response.data.resources.length > 0) {
			    $scope.nrOfServiceBindings = response.data.resources.length;
                            $scope.serviceBindings = response.data.resources;
                            angular.forEach(response.data.resources, function(serviceBindings, i) {
                                    window.alert('service bindings name' + serviceBindings.entity.name);
				    //window.alert(Object.keys(serviceBindings.entity));

				    var objectServiceBindings = {
                                        id: serviceBindings.metadata.guid,
                                        url: serviceBindings.metadata.url,
                                        created_at: serviceBindings.metadata.created_at,
                                        updated_at: serviceBindings.metadata.updated_at,
                                        app_guid: serviceBindings.entity.app_guid,
                                        service_instance_guid: serviceBindings.entity.service_instance_guid,
					credentials: serviceBindings.entity.credentials.creds-key-48,
					binding_options: serviceBindings.entity.binding_options,
					gateway_data: serviceBindings.entity.gateway_data,
					gateway_name: serviceBindings.entity.gateway_name,
					syslog_drain_url: serviceBindings.entity.syslog_drain_url,
					volume_mounts: serviceBindings.entity.volume_mounts,
					name: serviceBindings.entity.name,
					last_operation_type: serviceBindings.entity.last_operation.type,
					last_operation_state: serviceBindings.entity.last_operation.state,
					last_operation_description: serviceBindings.entity.last_operation.description,
					last_operation_created_at: serviceBindings.entity.last_operation.created_at,
					last_operation_updated_at: serviceBindings.entity.last_operation.updated_at,
					app_url: serviceBindings.entity.app_url,
					service_instance_url: serviceBindings.entity.service_instance_url,
					service_binding_parameters_url: serviceBindings.entity.service_binding_parameters_url
                                    };

				    $scope.serviceBindings.push(objectServiceBindings);
                                });    
			}
		    }); 
	    }   
	    $scope.getServiceBindingsForTheServiceInstance();
	    
	    // api                                                                             
	    $scope.getServiceKeysForTheServiceInstance = function() {
		var getServiceInstancePromise = serviceInstanceService.getServiceKeysForServiceInstance($scope.id);
		//window.alert(getServiceInstancePromise);                                        
		var promises = [];
		q = getServiceInstancePromise.then(function(response) {
			window.alert('service keys ' + response.data.total_results);
			// populate service key                                              
			if (response.data.resources && response.data.resources.length > 0) {
			    $scope.nrOfServiceKeys = response.data.resources.length;
			    $scope.serviceKeys = response.data.resources;
			    angular.forEach(response.data.resources, function(serviceKeys, i) {
				    var objectServiceKeys = {
					id: serviceKeys.metadata.guid,
					url: serviceKeys.metadata.url,
					created_at: serviceKeys.metadata.created_at,
					updated_at: serviceKeys.metadata.updated_at,
					name: serviceKeys.entity.name,
					service_instance_guid: serviceKeys.entity.service_instance_guid,
					credentials: serviceKeys.credentials.creds-key-43,
					service_instance_url: serviceKeys.service_instance_url,
					service_key_parameters_url: serviceKeys.service_key_parameters_url
				    };

				    $scope.serviceKeys.push(objectServiceKeys);
				});
                        }
                    });
	    }
	    $scope.getServiceKeysForTheServiceInstance();
	    // api                                                                          
	    $scope.getPermissionsForTheServiceInstance = function() {
		window.alert('service instance permissions ');
		var getServiceInstancePromise = serviceInstanceService.getPermissionsForServiceInstance($scope.id);
		var promises = [];
		q = getServiceInstancePromise.then(function(response) {
			window.alert('permissions were loaded ');
			var objectPermissions = {
			    manage: response.data.manage,
			    read: response.data.read
			}
			
			$scope.permissions.push(objectPermissions);
		    }, function(err) {
			window.alert('Permissions were not loaded.');
			$log.error(err.data.description);
		    });
	    }
	    $scope.getPermissionsForTheServiceInstance();

	    $scope.getSharedFromForTheServiceInstance = function() {
		window.alert('service instance get shared from');
		var getServiceInstancePromise = serviceInstanceService.getSharedFromForServiceInstance($scope.id);
		var promises = [];
		q = getServiceInstancePromise.then(function(response) {
			window.alert('shared from were loaded '+response.data.length);
			var objectSharedFrom = {
			    space_guid: response.data.space_guid,
			    space_name: response.data.space_name,
			    organization_name: response.data.organization_name
			}

			$scope.sharedFrom.push(objectSharedFrom);
		    }, function(err) {
                        window.alert('Shared from were not loaded.');
                        $log.error(err.data.description);
                    });
	    }
	    $scope.getSharedFromForTheServiceInstance();
	    
	    $scope.getSharedToForTheServiceInstance = function() {
		window.alert('service instance get shared to');
                var getServiceInstancePromise = serviceInstanceService.getSharedToForServiceInstance($scope.id);
                var promises = [];
		q = getServiceInstancePromise.then(function(response) {
                        window.alert('shared to were loaded '+response.data.length);
			// populate service key                                                   
                        if (response.data.resources && response.data.resources.length > 0) {
                            $scope.nrOfServiceKeys = response.data.resources.length;
                            $scope.serviceKeys = response.data.resources;
                            angular.forEach(response.data.resources, function(sharedTo, i) {
				    var objectSharedTo = {
					space_guid: sharedTo.space_guid,
					space_name: sharedTo.space_name,
					organization_name: sharedTo.organization_name,
					bound_app_count: sharedTo.bound_app_count
				    }
				});
			    $scope.sharedTo.push(objectSharedTo);
			}
                    }, function(err) {
                        window.alert('Shared to were not loaded.');
                        $log.error(err.data.description);
                    });
	    }
	    $scope.getSharedToForTheServiceInstance();
	}]);