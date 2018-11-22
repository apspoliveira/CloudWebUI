angular.module('app.organization').controller('OrganizationDetailsCtrl', ['$route', '$rootScope', '$scope', '$routeParams', 'organizationService', 'spaceService', function($route, $rootScope, $scope, $routeParams, organizationService, spaceService) {
            $scope.name = '';
            $scope.id = $routeParams.organizationId;
	    
            // organizations                                                                 
	    $scope.quotaDefID = 0;
            $scope.organizationTotalQuota = 0;
            $scope.usedQuotaPercent = 0.0;
	    
            // space info                                                                   
	    $scope.spaces = [];
            $scope.nrOfSpaces = 0;
            $scope.spacesTotalQuota = 0;
	    
            // domain info                                                                  
	    $scope.sharedDomains = [];
            $scope.privateDomains = [];
	    $scope.nrOfPrivateDomains = 0;
	    $scope.domains = [];
            $scope.nrOfDomains = 0;
	    
            // users                                                                         
	    $scope.users = [];
            $scope.nrOfOrganizationUsers = 0;

	    $scope.auditors = [];
	    $scope.nrOfAuditors = 0;
	    
	    $scope.billingManagers = [];
	    $scope.nrOfBillingManagers = 0;
	    
	    $scope.managers = [];
	    $scope.nrOfManagers = 0;
	    
	    $scope.services = [];
	    $scope.nrOfServices = 0;

	    $scope.spaceQuotaDefinitions = [];
	    $scope.nrOfSpaceQuotaDefinitions = 0;
	    
	    $scope.allUsers = [];
	    $scope.nrOfAllUsers = 0;
	    
	    $scope.instanceUsage = [];
	    $scope.memoryUsage = [];
	    
            $scope.currentUser = {
                name: localStorage.getItem('userName'),
                currentManager: false
	    };
	    
	    // get particular organization                                                   
	    organizationService.getOrganization($scope.id).then(function(response) {
		    
		    var data = response.data;
		    $scope.name = data.entity.name;
		    $scope.quotaDefID = data.entity.quota_definition_guid;
		    
		    // get organization quota                                                    
                    organizationService.getQuotaForTheOrganization($scope.quotaDefID).then(function(response) {
			    var data = response.data;
			    
			    angular.forEach(data.resources, function(organization, i) {
				    if($scope.quotaDefID === organization.metadata.guid) {
                                        $scope.organizationTotalQuota += organization.entity.memory_limit;
				    }
				});
			});
                });
	    
	    $scope.getAuditorsForTheOrganization = function() {
		organizationService.getAuditorsForTheOrganization($scope.id).then(function(response) {
                        var data = response.data;
                        $scope.nrOfAuditors = data.total_results;

			angular.forEach(data.resources, function(organization, key) {
				var objectAuditor = {
				    id: organization.metadata.guid,
				    url: organization.metadata.url,
				    admin: organization.entity.admin,
				    active: organization.entity.active,
				    default_space_guid: organization.entity.default_space_guid,
				    username: organization.entity.username
				};
				
				$scope.auditors.push(objectAuditor);
			    });
			
		    });	
	    }
	    
	    $scope.getAuditorsForTheOrganization();
	    
	    $scope.getBillingManagersForTheOrganization = function() {
		organizationService.getBillingManagersForTheOrganization($scope.id).then(function(response) {
			
                        var data = response.data;
                        $scope.nrOfBillingManagers = data.total_results;
			
                        angular.forEach(data.resources, function(organization, key) {
                                var objectBillingManager = {
				    id: organization.metadata.guid,
                                    url: organization.metadata.url,
                                    admin: organization.entity.admin,
                                    active: organization.entity.active,
                                    default_space_guid: organization.entity.default_space_guid,
                                    username: organization.entity.username
				}
				
				$scope.billingManagers.push(objectBillingManager);
			    });
			
		    });
	    }
	    
	    $scope.getBillingManagersForTheOrganization();
	    
	    $scope.getDomainsForTheOrganization = function() {
		organizationService.getDomainsForTheOrganization($scope.id).then(function(response) {
			var data = response.data;
                        $scope.nrOfDomains = data.total_results;
		       
                        angular.forEach(data.resources, function(organization, key) {
                                var objectDomain = {
				    id: organization.metadata.guid,
                                    url: organization.metadata.url,
                                    name: organization.entity.name,
                                    router_group_guid: organization.entity.router_group_guid,
                                    router_group_type: organization.entity.router_group_type
                                }
				
				$scope.domains.push(objectDomain);
                            });
			
                    });
	    }
	    
	    $scope.getDomainsForTheOrganization();
	    
	    $scope.getManagersForTheOrganization = function() {
		organizationService.getManagersForTheOrganization($scope.id).then(function(response) {
			var data = response.data;
			$scope.nrOfManagers = data.total_results;
		       
                        angular.forEach(data.resources, function(organization, key) {
				var objectManager = {
				    id: organization.metadata.guid,
                                    url: organization.metadata.url,
                                    admin: organization.entity.admin,
                                    active: organization.entity.active,
                                    default_space_guid: organization.entity.default_space_guid,
                                    username: organization.entity.username
				}
				
				$scope.managers.push(objectManager);
			    });
			
		    });
	    }
	    
	    $scope.getManagersForTheOrganization();
	    
	    $scope.getPrivateDomainsForTheOrganization = function() {
		organizationService.getPrivateDomainsForTheOrganization($scope.id).then(function(response) {
			var data = response.data;
                        $scope.nrOfPrivateDomains = data.total_results;
			
                        angular.forEach(data.resources, function(organization, key) {
				var objectPrivateDomain = {
                                    id: organization.metadata.guid,
                                    url: organization.metadata.url,
                                    name: organization.entity.name,
                                    owning_organization_guid: organization.entity.owning_organization_guid
                                }
				
                                $scope.privateDomains.push(objectPrivateDomain);
                            });
			
                    });
	    }
	    
	    $scope.getPrivateDomainsForTheOrganization();
	    
	    $scope.getServicesForTheOrganization = function() {
		organizationService.getServicesForTheOrganization($scope.id).then(function(response) {
			var data = response.data;
                        $scope.nrOfServices = data.total_results;
		       
			angular.forEach(data.resources, function(organization, key) {
                                var objectService = {
				    id: organization.metadata.guid,
				    url: organization.metadata.url,
				    label: organization.entity.label,
				    provider: organization.entity.provider,
				    description: organization.entity.description,
				    long_description: organization.entity.long_description,
				    version: organization.entity.version,
				    info_url: organization.entity.info_url,
				    active: organization.entity.active,
				    bindable: organization.entity.bindable,
				    extra: organization.entity.extra,
				    documentation_url: organization.entity.documentation_url,
				    service_broker_guid: organization.entity.service_broker_guid,
				    plan_updateable: organization.entity.plan_updateable
				}
				
				$scope.services.push(objectService);
                            });
			
                    });
	    }
	    
	    $scope.getServicesForTheOrganization();
	    
	    $scope.getSpaceQuotaDefinitionsForTheOrganization = function() {
		organizationService.getSpaceQuotaDefinitionsForTheOrganization($scope.id).then(function(response) {
			var data = response.data;
			$scope.nrOfSpaceQuotaDefinitions = data.total_results;
			
			angular.forEach(data.resources, function(organization, key) {
                                var objectSpaceQuotaDefinitions = {
				    id: organization.metadata.guid,
				    url: organization.metadata.url,
				    name: organization.entity.name,
				    organization_id: organization.entity.organization_guid,
				    non_basic_services_allowed: organization.entity.non_basic_services_allowed,
				    total_services: organization.entity.total_services,
				    total_routes: organization.entity.total_routes,
				    memory_limit: organization.entity.memory_limit,
				    instance_memory_limit: organization.entity.instance_memory_limit,
				    app_instance_limit: organization.entity.app_instance_limit,
				    app_task_limit: organization.entity.app_task_limit,
				    total_service_keys: organization.entity.total_service_keys,
				    total_reserved_route_ports: organization.entity.total_reserved_route_ports
				}
				$scope.spaceQuotaDefinitions.push(objectSpaceQuotaDefinitions);
                            });
                    });
	    }
	    
	    $scope.getSpaceQuotaDefinitionsForTheOrganization();
	    
	    $scope.getUsersForTheOrganization = function() {
		organizationService.getAllUsersForTheOrganization($scope.id).then(function(response) {
			var data = response.data;
			$scope.nrOfAllUsers = data.total_results;
		       
			angular.forEach(data.resources, function(user, key) {
				var objectUser = {
                                    id: user.metadata.guid,
				    url: user.metadata.url,
				    admin: user.entity.admin,
				    active: user.entity.active,
				    default_space_guid: user.entity.default_space_guid,
				    username: user.entity.username
                                };                                                              
				
                                $scope.allUsers.push(objectUser);
			    });
                    });
	    }
	    
	    $scope.getUsersForTheOrganization();

	    $scope.getOrganizationInstanceUsageForTheOrganization = function() {
		organizationService.getOrganizationInstanceUsage($scope.id).then(function(response) {
                        var data = response.data;

                        angular.forEach(data.resources, function(organization, key) {
				var objectInstanceUsage = {
				    instance_usage: organization.instance_usage
				}
				$scope.instanceUsage.push(objectInstanceUsage);
			    });
                    });
	    }
	    
	    $scope.getOrganizationInstanceUsageForTheOrganization();
	    
	    $scope.getOrganizationMemoryUsageForTheOrganization = function() {
		organizationService.getOrganizationMemoryUsage($scope.id).then(function(response) {
                        var data = response.data;
			
                        angular.forEach(data.resources, function(organization, key) {
                                var objectMemoryUsage = {
                                    memory_usage: organization.memory_usage
                                }
                                $scope.memoryUsage.push(objectMemoryUsage);
                            });
                    });
            }
	    
	    $scope.getOrganizationMemoryUsageForTheOrganization();
	    
	    // get spaces for the organization                                       
	    $scope.getSpacesForTheOrganization = function() {
		organizationService.getSpacesForTheOrganization($scope.id).then(function(response) {                                                                                       
			var data = response.data;                                          
			$scope.nrOfSpaces = data.total_results;
		       
			// get summary for each space                                     
			angular.forEach(data.resources, function(space, key) {            
				$scope.spaces.push(space.metadata.guid);                                    
				spaceService.getSpaceSummary(space.metadata.guid).then(function(responseSpace) {                                                                            
					var dataSpace = responseSpace.data;       
					
					// calculate space memory and stopped or started apps 
					var memory = 0;                                       
					var nrOfStartedApps = 0;                              
					var nrOfStoppedApps = 0;                             
					var nrOfCrashedApps = 0;                                  
					angular.forEach(dataSpace.apps, function(application, i) {                                                                                               
						memory += application.memory * application.instances;                                                                                             
                                                // started apps                             
						if (application.state === 'STARTED') {      
						    if ((application.instances - application.running_instances) > 0){                                                                      
							nrOfCrashedApps++;                    
						    }else{                                  
							nrOfStartedApps++;                   
						    }                                          
						}      
						
                                                // stopped apps                              
						if (application.state === 'STOPPED') {        
						    nrOfStoppedApps++;                          
						}                                             
					    });                                                   
					var objectSpace = {                                
					    id: dataSpace.guid,                             
					    name: dataSpace.name,                            
					    memory: memory,                                   
					    nrOfStartedApps: nrOfStartedApps,                 
					    nrOfStoppedApps: nrOfStoppedApps,                  
					    nrOfCrashedApps: nrOfCrashedApps,                  
					    nrOfServices: dataSpace.services.length             
					};                                                   
					
					//$scope.spaces.push(objectSpace);                
					for (var j = 0; j < $scope.spaces.length; j++) {   
					    if ($scope.spaces[j] === objectSpace.id) {       
						$scope.spaces[j]=objectSpace;                
						break;                                       
					    }
					}                                                                                     
					$scope.spacesTotalQuota += memory;          
					$scope.setOrganizationQuota();                 
				    });                                                           
			    });                                                        
			
		    });   		
	    };
	    $scope.getSpacesForTheOrganization();
	    
	    // get organization sharedDomains                                                     
            /*organizationService.getSharedDomainsForTheOrganization($scope.id).then(function(response) {                                                                                        
	      var data = response.data;     
	      $scope.nrOfDomains += data.total_results;                               
	      $scope.sharedDomains = (data.resources);                               
	      }, function(err) {                                                         
	      $log.error(err.data.description);                                       
	      });                                                                          
	      
	    // get organization privateDomains                                                    
	    organizationService.getPrivateDomainsForTheOrganization($scope.id).then(function(response) {                                                                                     
	    var data = response.data;
	    $scope.nrOfDomains += data.total_results;                                
	    $scope.privateDomains = data.resources;                                
	    }, function(err) {                                                         
	    $log.error(err);                                                      
	    });*/                       
	    
	    $scope.retrieveRoleOfAllUsersForTheOrganization = function() {                       
		organizationService.retrieveRolesOfAllUsersForTheOrganization($scope.id).then(function(response){                                                                          
			var data = response.data;                                             
			$scope.nrOfOrganizationUsers = data.total_results;                  
			var userRoles = [];                                                                                         
                        angular.forEach(data.resources, function(user, key) {                   
				var orgManager = false;                                   
				var orgAuditor = false;                                          
                                var billingManager = false;   
				
				angular.forEach(user.entity.organization_roles, function(userRole, key) {                                                                                         
					if (userRole === 'org_manager'){                        
					    orgManager = true;                                   
					}                                                         
					if (userRole === 'org_auditor'){                    
					    orgAuditor = true;                                 
					}                                                         
					if (userRole === 'billing_manager'){               
					    billingManager = true;                          
					}                                                         
					var objectRole = {                                  
					    role: userRole                                     
					};                                                        
					userRoles.push(objectRole);
				    });
				
                                var objectUser = {                                          
				    id: user.metadata.guid,                                 
				    organizationId: $scope.id,                              
				    name: user.entity.username,                             
				    userRoles: userRoles,                                   
				    orgManager: orgManager,                                 
				    orgAuditor: orgAuditor,                                 
				    billingManager: billingManager,                          
				    currentUser: $scope.currentUser.name === user.entity.username
                                };                                                                
                                $scope.users.push(objectUser);                                    
				if ($scope.currentUser.name === user.entity.username){      
				    $scope.currentUser.currentManager = orgManager;            
				}                                                                
                            });  
		    });        
	    };
	    $scope.retrieveRoleOfAllUsersForTheOrganization();          
	    
	    $scope.setOrganizationQuota = function() {                                                 
		if ($scope.organizationTotalQuota > 0) {                                               
		    $scope.usedQuotaPercent = (($scope.spacesTotalQuota / $scope.organizationTotalQuota)*100); 
		}                                                                                           
            };   
	    
	    $scope.showSpace = function(spaceId, event) {                                                      
		if (event.ctrlKey==1){                                                                  
		    window.open('#/organizations/' + $scope.id + '/spaces/' + spaceId);                       
		}else{                                                                                    
		    window.location = '#/organizations/' + $scope.id + '/spaces/' + spaceId;               
		}                                                                                           
	    };

	    $scope.showService = function(serviceId, event) {	
		
                if (event.ctrlKey==1){	       
		    
                    window.open('#/organizations/' + $scope.id + '/services/' + serviceId);    
		    
                }else{                                                                          		    
                    window.location = '#/organizations/' + $scope.id + '/services/' + serviceId;
		    
                }			      
		
            };

	}]);
