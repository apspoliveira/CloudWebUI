angular.module('app.application').controller('ApplicationDetailsCtrl', ['$rootScope', '$scope', '$routeParams', '$log', 'applicationService', 'messageService', function($rootScope, $scope, $routeParams, $log, applicationService, messageService) {
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
	    
	    $scope.test = '{"glossary": {"title": "example glossary","GlossDiv": {"title": "S","GlossList": {GlossEntry": {"ID": "SGML","SortAs": "SGML","GlossTerm": "Standard Generalized Markup Language","Acronym": "SGML","Abbrev": "ISO 8879:1986","GlossDef": {"para": "A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso": ["GML", "XML"]},"GlossSee": "markup"}}}}}';
	    
	    //window.alert('Scope '+ $scope.test);
	    
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
			    }, function(err) {                                                 
				messageService.addMessage('danger', 'Stack load failed.');      
				$log.error(err);                                                
			    });                                                                                                                                                         
			// get environment variables   
			applicationService.getEnvironmentVariables($scope.applicationId).then(function(envVarResponse) {                                                                        
				$scope.environmentVariables = envVarResponse.data;            
				$scope.systemEnvironmentVariables = $scope.environmentVariables.system_env_json;  
				angular.forEach(envVarResponse.data.environment_json, function(key, value) {      
					$scope.nrOfUserEnvVars += 1;                           
				    });                                                                               
				$scope.userEnvironmentVariables = $scope.environmentVariables.environment_json;   
			    }, function(err) {                                                 
				messageService.addMessage('danger', 'Could not load environment variables.');     
				$log.error(err);                                                
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
			    }, function(err) {                                                  
				messageService.addMessage('danger', 'The service bindings have not been loaded.');                                                                              
				$log.error(err);                                                
			    });                                                                                   
			if($scope.state === 'STARTED') $scope.getInstances();                   
                                                                                              
		    }, function(err) {                                                         
			messageService.addMessage('danger', 'The application summary has not been loaded.');  
			$log.error(err);                                                        
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
		    }, function(err) {                                                          
			messageService.addMessage('danger', 'Could not load app instances.');  
			$log.error(err);                                                        
		    });       
	    };    

	    // get application events                                                          
	    applicationService.getAppEvents($scope.applicationId).then(function(appEventsResponse) {      
		    $scope.appEvents = appEventsResponse.data.resources;                        
		    $scope.eventTotalpages = appEventsResponse.data.total_pages;               
		    $scope.eventTotalResults = appEventsResponse.data.total_results;                         }, function(err) {                                                                  
		    $log.error(err);                                                          
		    messageService.addMessage('danger', 'Could not load app events: ' +err);                 });            

	    // get application events      
	    
	    $scope.editApplication = function() {                                                                        
		var application = {                                                                            
		    'id': $scope.applicationId,                                                          
		    'name': $scope.name                                                                  
		};
		
	    };   
	    
	    $scope.deleteApplication = function() {                                             
		var applicationId = $scope.applicationId;      
	    };        

	    $scope.mapRoute = function() {                                                                                      // applicationId injection                                                                               
		var route = {                                                                                  
		    'organizationId': $scope.organizationId,                                              
		    'applicationId': $scope.applicationId,                                               
		    'spaceId': $scope.spaceId                                                                  
		};

	    };   

	    $scope.unmapRoute = function(route) {                                                                                                                                              
		// applicationId injection                                                                     
		route.applicationId = $scope.applicationId;                                               
		route.id = route.guid;       
	    };                                                                                                                                                                                     
	    $scope.addServiceBinding = function(alreadyBoundServices) {                                                  
		var config = {                                                                         
		    applicationId: $scope.applicationId,                                                  
		    spaceId: $scope.spaceId,                                                             
		    alreadyBoundServices: alreadyBoundServices                                               
		};

	    };                                                                                                                                                                
	    $scope.deleteServiceBinding = function(service) {       
	    };                                                                                                                                                                                  
	    $scope.addUserEnv = function() {                                                              
		var config = {                                                                           
		    applicationId: $scope.applicationId,                                                 
		    existingUserEnvs: $scope.userEnvironmentVariables                                          
		};

	    };                                                                                                                                                                                             
	    $scope.editUserEnv = function(userEnvKey, userEnvValue) {                                                    
		var userEnvToEdit = {                                                                     
		    key: userEnvKey,                                                                       
		    value: userEnvValue                                                                   
		};                                                                                                       
		var config = {                                                                           
		    applicationId: $scope.applicationId,                                                 
		    existingUserEnvs: $scope.userEnvironmentVariables,                                     
		    userEnvToEdit: userEnvToEdit                                                               
		};
		
	    };                                                                                                                                                                                               
	    $scope.deleteUserEnv = function(userEnvKey) {                                                                
		var config = {                                                                         
		    applicationId: $scope.applicationId,                                                  
		    existingUserEnvs: $scope.userEnvironmentVariables,                                  
		    userEnvToDelete: userEnvKey                                                          
		};

	    };                                                                                                                                                                                 
	    $scope.stopApplication = function() {   
	    };                                                                                                                                                                              
	    $scope.startApplication = function() {    
	    };                                                                                                                                                                             
	    $scope.restartApplication = function() {   
	    };                                                                                                                                                                                               
	    $scope.scaleApplication = function() {                                                                       
		window.alert('scale application');

		var config = {                                                                            
		    applicationId: $scope.applicationId,                                                
		    scale: $scope.scale                                                                  
		};
	    };
	    
	}]);