angular.module('app').controller('ApplicationDetailsCtrl', ['$rootScope', '$scope', '$routeParams', 'applicationService', function($rootScope, $scope, $routeParams, applicationService) {
	    window.alert('Application details');
	    
	    $rootScope.rootFields.showContent = false;
	    
	    $scope.summary = {};
	    $scope.stack = {};
	    $scope.environmentVariables = {};
	    $scope.userEnvironmentVariables = {};
	    $scope.systemEnvironmentVariables = '';
	    
	    $scope.name = '';
	    $scope.organizationId = $routeParams.organizationId;
	    $scope.spaceId = $routeParams.spaceId;
	    $scope.applicationId = $routeParams.applicationId;
	    $scope.stackId = 0;
	    
	    $scope.nrOfInstances = 0;
	    $scope.nrOfServices = 0;
	    $scope.nrOfRoutes = 0;
	    $scope.nrOfUserEnVars = 0;
	    $scope.diskQuota = 0;
	    $scope.memory = 0;
	    $scope.lastPush = 0;
	    $scope.state = '';
	    
	    $scope.buildPack = '';
	    $scope.startCommand = '';
	    $scope.packageState = '';
	    
	    $scope.services = [];
	    $scope.serviceBindings = [];
	    $scope.serviceLabel = '';
	    $scope.routes = [];
	    $scope.domains = [];
	    
	    $scope.scale = {};
	    $scope.instances = [];
	    
	    // app summary  
	    $scope.getApplicationSummary = function() {
		window.alert('get application summary');
  
		var getApplicationSummaryPromise = applicationService.getApplicationSummary($scope.applicationId);                                                                                         
		getApplicationSummaryPromise.then(function(response) {                                    
		    $scope.summary = response.data;                                                      		 $scope.stackId = response.data.stack_guid;                                                       $scope.name = response.data.name;                                                                $scope.state = response.data.state;                                                              $scope.nrOfInstances = response.data.instances;                                                  $scope.scale.instances = response.data.instances;                                                $scope.diskQuota = response.data.disk_quota;                                                     $scope.memory = response.data.memory;                                                            $scope.scale.memory = response.data.memory;                                                      $scope.scale.initialMemoryValue = $scope.scale.memory;                                           $scope.lastPush = response.data.package_updated_at;                                              $scope.buildPack = response.data.detected_buildpack;                                  
			if ($scope.buildPack==="") $scope.buildPack = response.data.buildpack;                
			$scope.startCommand = response.data.detected_start_command;              
			$scope.packageState = response.data.package_state;                                               $scope.services = response.data.services;                                             
			angular.forEach($scope.services, function(service, i) {               
				service.isCollapsed = true;                           
				service.docsURL='http://docs.run.pivotal.io/marketplace/services/'+service.service_plan.service.label+'.html';                                                   
				service.supportURL='https://support.'+service.service_plan.service.label+'.com/';
			    });                                                                                   
			$scope.nrOfServices = $scope.services.length;                                                    $scope.routes = response.data.routes;                                 
			$scope.nrOfRoutes = $scope.routes.length;                               
			$scope.domains = response.data.available_domains;                                                                                                               
			// get stack                                                            
			applicationService.getStack($scope.stackId).then(function(stackResponse) {            
				$scope.stack = stackResponse.data;                              
			    });                                                                                                                                                         
			// get environment variables   
			applicationService.getEnvironmentVariables($scope.applicationId).then(function(envVarResponse) {                                                                        
				$scope.environmentVariables = envVarResponse.data;            
				$scope.systemEnvironmentVariables = $scope.environmentVariables.system_env_json;  
				angular.forEach(envVarResponse.data.environment_json, function(key, value) {      
					$scope.nrOfUserEnvVars += 1;                           
				    });                                                                               
				$scope.userEnvironmentVariables = $scope.environmentVariables.environment_json;   
			    });                                                                                   
			// get service bindings and add to the service the credentials         
			var getServiceBindingsPromise = applicationService.getServiceBindings($scope.applicationId);                                                                            
			getServiceBindingsPromise.then(function(response) {                     
				angular.forEach(response.data.resources, function(serviceBinding, i) {            
					var keepGoing = true;                                  
					angular.forEach($scope.services, function(service, k) {
						if (keepGoing) {                               
						    if (service.guid === serviceBinding.entity.service_instance_guid) {   
							// pretty-printed json                 
							var credentials = serviceBinding.entity.credentials;              
							credentials = JSON.stringify(credentials, null, '  ');            
							service.serviceBindingId = serviceBinding.metadata.guid;          
							service.credentials = credentials;     
							keepGoing = false;                      
						    }                                           
						}                                               
					    });      
				    });                                                      
			    });                                                                                   
			if($scope.state === 'STARTED') $scope.getInstances();                   
                                                                                              
		    });       	
	    };                                                                                                           
	    $scope.getApplicationSummary();    
	    
	    // get instances                                                                                             
	    $scope.getInstances = function() {      
		applicationService.getInstances($scope.applicationId).then(function(instanceResponse) {   
			angular.forEach(instancesResponse.data, function(instance, i) {                       
				var hours = Math.floor(instances.stats.uptime / 3600);          
				var hoursRest = instance.stats.uptime % 3600;                   
				var minutes = Math.floor(hoursRest / 60);                                                                                                           
				instance.stats.hours = hours;                                   
				instance.stats.minutes = minutes;                               
			    });                                                                                   
			$scope.instances = instancesResponse.data;                               
		    });       
	    };    

	    // get application events                                                          
	    applicationService.getAppEvents($scope.applicationId).then(function(appEventsResponse) {      
		    $scope.appEvents = appEventsResponse.data.resources;                        
		    $scope.eventTotalpages = appEventsResponse.data.total_pages;               
		$scope.eventTotalResults = appEventsResponse.data.total_results;                         });            
                 	    
}]);
