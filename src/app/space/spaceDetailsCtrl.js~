angular.module('app.space').controller('SpaceDetailsCtrl', ['$rootScope', '$scope', '$routeParams', '$log', 'spaceService', 'organizationService', 'routeService', function($rootScope, $scope, $routeParams, $log, spaceService, organizationService, routeService) {
	    $rootScope.rootFields.showContent = false;
	    
            $scope.name = '';
            $scope.organizationId = $routeParams.organizationId;
            $scope.id = $routeParams.spaceId;
            $scope.spaceId = $routeParams.spaceId;
	    
            $scope.applications = [];
            $scope.nrOfApplications = 0;
            $scope.services = [];
            $scope.nrOfServices = 0;

            $scope.routes = [];
            $scope.nrOfRoutes = 0;
	    
            $scope.users = [];
            $scope.usersOrganization = [];
            $scope.nrOfSpaceUsers = 0;
	    
	    $scope.auditors = [];
	    $scope.nrOfAuditors = 0;

	    $scope.developers = [];
	    $scope.nrOfDevelopers = 0;

	    $scope.domains = [];
	    $scope.nrOfDomains = 0;

	    $scope.events = [];
	    $scope.nrOfEvents = 0;

	    $scope.managers = [];
	    $scope.nrOfManagers = 0;

	    $scope.securityGroups = [];
	    $scope.nrOfSecurityGroups = 0;

	    $scope.stagingSecurityGroups = [];
	    $scope.nrOfStagingSecurityGroups = 0;

            $scope.userName = localStorage.getItem('userName');
	    
            $scope.showOrphanRoute = false;
	    
            $scope.currentUser = {
                name: localStorage.getItem('userName'),
                spaceId: $routeParams.spaceId,
                currentManager: false
            };
	    
	    window.alert($scope);

	    // service summary from api                                                    
	    $scope.getRoutesForTheSpace = function(){
		
		//window.alert('get routes for the space');
		
                /*if ($scope.routes.length > 0) {
		  $scope.routes.length = 0;
		  }*/
		
                $scope.showOrphanRoute = false;
		
                var applications = $scope.applications;
		
		q = routeService.getRoutesForTheSpace($scope.id).then(function(response){
			var data = response.data;
                        $scope.nrOfRoutes = data.total_results;
                        angular.forEach(data.resources, function(route, key){
                                var objectRoute = {
				    id: route.metadata.guid,
                                    name: route.entity.host,
                                    apps: []
                                };
				
				//window.alert('objectroute ' + objectRoute);

                                for (var j = 0; j < applications.length; j++) {
                                    for (var i = 0; i < applications[j].routes.length; i++) {
                                        if (applications[j].routes[i].guid === objectRoute.id) {
                                            var objectRouteApp = {
                                                name: applications[j].name,
                                                id: applications[j].id,
                                            };
                                            objectRoute.apps.push(objectRouteApp);
                                        }
                                    }
                                }
                                if (!objectRoute.apps.length) $scope.showOrphanedRoute = true;
                                $scope.routes.push(objectRoute);
				});
                    }, function(err) {
		    messageService.addMessage('danger', 'The routes have not been loaded.');
			});
		    
		//window.alert('q ' + q);
		return q;
	    };
	    
	    $scope.getApplicationsForTheSpace = function() {                                 
		
		//window.alert('get applications for the space');
		
		/*if ($scope.applications.length > 0) {                                 
		  $scope.applications.length = 0;                                         
		  } */                                          
		
		var getSpaceSummaryPromise = spaceService.getSpaceSummary($scope.spaceId);     
		//window.alert(getSpaceSummaryPromise);
		var promises = [];                                                            
		q = getSpaceSummaryPromise.then(function(response) {              
			//window.alert('Space promise ' + Object.keys(response.data));

			//$scope.getRoutesForTheSpace();                                    
			$scope.name = response.data.name;                        
			
			//window.alert(response.data.apps.length);

			// populate applications                                                 
                        if (response.data.apps && response.data.apps.length > 0) {            
			    $scope.nrOfApplications = response.data.apps.length;             
			    $scope.applications = response.data.apps;                          
			    angular.forEach(response.data.apps, function(app, i) {                                                                                
                                    //window.alert(app + ' ' + i);

				    var objectApp = {                                            
                                        id: app.guid,                                          
					status: app.state === 'running',                       
					name: app.name,                                     
					instances: app.instances,                              
					memory: app.memory,                                  
					url: app.urls[0], // only the first url
					routes: app.routes                                 
				    };                          

				    //window.alert('objectApp ' + objectApp);

                                    if (app.state === 'STARTED' && (app.instances !== app.running_instances)) objectApp.status = 'crashed';                                                   
				    for (var j = 0; j < response.data.apps.length; j++) {   
					if (response.data.apps[j].guid === objectApp.id) {      
					    $scope.applications[j]=objectApp;                
					    break;                                             
					}                                                      
				    }                                                           
				});                                                               
                        }                                                                         
                        // populate services                                                     
                        if (response.data.services && response.data.services.length > 0) {       
                            /*if ($scope.services.length > 0) {                                   
				$scope.services.length = 0;                                 
				} */                                                                    
                            $scope.nrOfServices = response.data.services.length;                                                                                       
                            angular.forEach(response.data.services, function(service, i) {        
				    //          window.alert('Service ' + service);
				    
				    var objectService = {          
					id: service.guid,                                   
					name: service.name,                                  
					servicePlan: service.service_plan.service.label + ', ' + service.service_plan.name,                                                                     
					nrOfBoundApps: service.bound_app_count,               
					dashboardUrl: service.dashboard_url,                 
					supportURL:'https://support.'+service.service_plan.service.label+'.com/',                                                                                  
                                        docsURL: 'http://docs.run.pivotal.io/marketplace/services/'+service.service_plan.service.label+'.html'                                                     
                                    };                                                           
				    
				    //window.alert('objectService ' + objectService);

                                    $scope.services.push(objectService);                          
                                });                                                              
                        }                                                                     
		    }, function(err) {                                                      
			//$scope.getRoutesForTheSpace();                                     
			messageService.addMessage('danger', 'The space summary has not been loaded.');                                                                                         
			$log.error(err.data.description);                                   
		    }); 
		//window.alert('q :'+Object.keys(q));
		return q;  
	    };    
	    
	    $scope.getApplicationsForTheSpace().then(function(){                          
		    $scope.getRoutesForTheSpace();                                          
		});   

	    $scope.getAuditorsForTheSpace = function() {
		spaceService.getAuditorsForTheSpace($scope.id).then(function(response) {
			window.alert('get auditors for the space');                            
			
			var data = response.data;

			//window.alert(data.total_results);

			$scope.nrOfAuditors = response.data.total_results; 

			angular.forEach(data.resources, function(user, key) {
				var objectAuditor = {
                                    id: user.metadata.guid,
				    url: user.metadata.url,
				    admin: user.entity.admin,
				    active: user.entity.active,
				    default_space_guid: user.entity.default_space_guid,
				    username: user.entity.username
                                };    
				
				$scope.auditors.push(objectAuditor);
                            });		  
			
                    }, function(err) {	     
			$log.error(err.data.description);  
		    });
	    }

	    $scope.getAuditorsForTheSpace();
	    
	    $scope.getDevelopersForTheSpace = function() {
		spaceService.getDevelopersForTheSpace($scope.id).then(function(response) {
                        window.alert('get developers for the space');

                        var data = response.data;

                        //window.alert(data.total_results);                                       
                        $scope.nrOfDevelopers = response.data.total_results;

                        angular.forEach(data.resources, function(user, key) {
                                var objectDeveloper = {
                                    id: user.metadata.guid,
                                    url: user.metadata.url,
                                    admin: user.entity.admin,
                                    active: user.entity.active,
                                    default_space_guid: user.entity.default_space_guid,
                                    username: user.entity.username
                                };

                                $scope.developers.push(objectDeveloper);
                            });
                    }, function(err) {
                        $log.error(err.data.description);
		    });
	    }
		   
	    $scope.getDevelopersForTheSpace();

	    $scope.getDomainsForTheSpace = function() {
		spaceService.getDomainsForTheSpace($scope.id).then(function(response) {
                        window.alert('get domains for the space');
			
                        var data = response.data;
			
                        //window.alert(data.total_results);                                                                                                             
                        $scope.nrOfDomains = response.data.total_results;

                        angular.forEach(data.resources, function(user, key) {
                                var objectDomain = {
                                    id: user.metadata.guid,
                                    url: user.metadata.url,
                                    name: user.entity.name,
                                    router_group_guid: user.entity.router_group_guid,
                                    router_group_type: user.entity.router_group_type
                                };
				
                                $scope.domains.push(objectDomain);
                            });
                    }, function(err) {
                        $log.error(err.data.description);
                    });
	    }

	    $scope.getDomainsForTheSpace();

	    $scope.getEventsForTheSpace = function() {
		spaceService.getEventsForTheSpace($scope.id).then(function(response) {
			window.alert('get events for the space');

			var data = response.data;
                        //window.alert(data.total_results);                                    
                        $scope.nrOfEvents = response.data.total_results;

			angular.forEach(data.resources, function(user, key) {
				var objectEvent = {
				    id: user.metadata.guid,
				    url: user.metadata.url,
				    type: user.entity.type, 
				    actor: user.entity.actor,
				    actor_type: user.entity.actor_type,
				    actor_name: user.entity.actor_name,
				    actee: user.entity.actee,
				    actee_type: user.entity.actee_type,
				    actee_name: user.entity.actee_name,
				    space_id: user.entity.space_guid,
				    organization: user.entity.organization_guid
				};
		   
				$scope.events.push(objectEvent);
                            });                              
		    }, function(err) {                                                          
                        $log.error(err.data.description); 
                    });
	    };

	    $scope.getEventsForTheSpace();

	    $scope.getManagersForTheSpace = function() {
		spaceService.getManagersForTheSpace($scope.id).then(function(response) {
                        window.alert('get managers for the space');

                        var data = response.data;
                        //window.alert(data.total_results);                                       
                        $scope.nrOfManagers = response.data.total_results;

                        angular.forEach(data.resources, function(user, key) {
                                var objectManager = {
				    id: user.metadata.guid,
				    url: user.metadata.url,
				    admin: user.entity.admin, 
				    active: user.entity.active,
				    space_id: user.entity.default_space_guid,
				    username: user.entity.username
				}

				$scope.managers.push(objectManager);
			    });
		    }, function(err) {
			$log.error(err.data.description);
                    });	    
	    };

	    $scope.getManagersForTheSpace();

	    $scope.getSecurityGroupsForTheSpace = function() {
		spaceService.getSecurityGroupsForTheSpace($scope.id).then(function(response) {
			window.alert('get security groups for the space');
			
			var data = response.data;
                        //window.alert(data.total_results);                                                                                                                                      
                        $scope.nrOfSecurityGroups = response.data.total_results;
			
                        angular.forEach(data.resources, function(user, key) {
                                var objectSecurityGroup = {
				    id: user.metadata.guid,
				    url: user.metadata.url,
				    name: user.entity.name,
				    running: user.entity.running_default,
				    staging: user.entity.staging_default
				}

				angular.forEach(user.entity.rules, function(rule, key) {
					objectSecurityGroup.protocol = rule.protocol;
					objectSecurityGroup.ports = rule.ports;
					objectSecurityGroup.destination = rule.destination;
				    });
				
                                $scope.securityGroups.push(objectSecurityGroup);
                            });
                    }, function(err) {
                        $log.error(err.data.description);
		    });
	    }
	    
	    $scope.getSecurityGroupsForTheSpace();

	    $scope.getStagingSecurityGroupsForTheSpace = function() {
		spaceService.getStagingSecurityGroupsForTheSpace($scope.id).then(function(response) {
			window.alert('get staging security groups for the space');

                        var data = response.data;
                        //window.alert(data.total_results); 
			
                        $scope.nrOfStagingSecurityGroups = response.data.total_results;

                        angular.forEach(data.resources, function(user, key) {
				var objectStagingSecurityGroup = {
                                    id: user.metadata.guid,
                                    url: user.metadata.url,
                                    name: user.entity.name,
                                    running: user.entity.running_default,
                                    staging: user.entity.staging_default
                                }

				angular.forEach(user.entity.rules, function(rule, key) {
                                        objectStagingSecurityGroup.protocol = rule.protocol;
                                        objectStagingSecurityGroup.ports = rule.ports;
                                        objectStagingSecurityGroup.destination = rule.destination;
                                    });

                                $scope.stagingSecurityGroups.push(objectStagingSecurityGroup);
                            });
                    }, function(err) {
                        $log.error(err.data.description);
                    });
            }

	    $scope.getStagingSecurityGroupsForTheSpace();
	    
	    $scope.retrieveRolesOfAllUsersForTheSpace = function() {                                  
		//window.alert('retrieve roles of all users for the space');
		
		/*if ($scope.users.length > 0) {                                                      		    $scope.users.length = 0;                                                  
		  }*/
		
		spaceService.retrieveRolesOfAllUsersForTheSpace($scope.id).then(function(response){                                                                                            
			//window.alert('retrieve roles of all users');
			
			var data = response.data;                                           
			$scope.nrOfSpaceUsers = data.total_results;                               
			var userRoles = [];                                                       
			angular.forEach(data.resources, function(user, key) {              
				var spaceDeveloper = false;                                 
				var spaceManager = false;                                   
				var spaceAuditor = false;                                         
				angular.forEach(user.entity.space_roles, function(userRole, key) {                                                                                             
					if (userRole === 'space_developer'){               
					    spaceDeveloper = true;                          
					}                                                         
					if (userRole === 'space_manager'){                   
					    spaceManager = true;                               
					}                                                         
					if (userRole === 'space_auditor'){                 
					    spaceAuditor = true;                               
					}                                        
				    });                                                          
				
				var objectUser = {                                          
				    id: user.metadata.guid,                                    
				    name: user.entity.username,                            
				    spaceDeveloper: spaceDeveloper,                          
				    spaceManager: spaceManager,                            
				    spaceAuditor: spaceAuditor,                              
				    spaceId: $scope.spaceId,                                 
				    currentUser: $scope.userName === user.entity.username      
				};                                                                
				//window.alert('objectUser ' + objectUser);

				$scope.users.push(objectUser);      
			    });                                                                   
                        $scope.retrieveRolesOfAllUsers();                                         
                    }, function(err) {                                                            
                        $log.error(err.data.description);                                         
                    });                                                                      
	    };                                                                                    
            $scope.retrieveRolesOfAllUsersForTheSpace();  
	    
	    $scope.retrieveRolesOfAllUsers = function() {                                     
		
		//window.alert('retrieve roles of all users');
		
		// clear spaces array on reload                                             
		/*if ($scope.usersOrganization.length > 0) {                                   
		    $scope.usersOrganization.length = 0;                                     
		    }*/
		
		organizationService.retrieveRolesOfAllUsersForTheOrganization($scope.organizationId).then(function(response){                                                                 
			var data = response.data;                                                 
			angular.forEach(data.resources, function(userOrg, key) {            
				var orgManager = false;                                     
				var orgAuditor = false;                                       
				var billingManager = false;                                       
				var spaceManager = false;                                     
				var spaceDeveloper = false;                                 
				var spaceAuditor = false;                                     
				var spaceUser = false;                                            
				//window.alert(data.resources);
				
				angular.forEach(userOrg.entity.organization_roles, function(userRole, key) {                                                                                 
					if (userRole === 'org_manager'){                   
					    orgManager = true;                               
					}                                                         
					if (userRole === 'org_auditor'){                     
					    orgAuditor = true;                                
					}                                                         
					if (userRole === 'billing_manager'){               
					    billingManager = true;                           
					}                                                     
				    });                                                           
				angular.forEach($scope.users, function(user, key) {               
					if (user.id === userOrg.metadata.guid){             
					    spaceManager = user.spaceManager;                 
					    spaceDeveloper = user.spaceDeveloper;              
					    spaceAuditor = user.spaceAuditor;                  
					    spaceUser = spaceAuditor || spaceDeveloper || spaceManager;                                                                                         
					}
				    });                                                                                                                   
                                angular.forEach($scope.users, function(user, key) {               
                                        if (user.id === userOrg.metadata.guid){                  
                                            spaceManager = user.spaceManager;                 
					    spaceDeveloper = user.spaceDeveloper;             
					    spaceAuditor = user.spaceAuditor;                  
					    spaceUser = spaceAuditor || spaceDeveloper || spaceManager;                                                                                      
					}                                                      
				    });    
				
				//window.alert('object user: ' + userOrg.entity.username);

				var objectUser = {                                            
				    id: userOrg.metadata.guid,                                 
				    name: userOrg.entity.username,                          
				    orgManager: orgManager,                                  
				    orgAuditor: orgAuditor,                                 
				    billingManager: billingManager,                         
				    spaceDeveloper: spaceDeveloper,                            
				    spaceManager: spaceManager,                               
				    spaceAuditor: spaceAuditor,                             
				    spaceUser: spaceUser,                                   
				    orgId: $scope.organizationId,                            
				    spaceId: $scope.id,                                       
				    currentUser: $scope.currentUser === userOrg.entity.username
				};                           

				//window.alert('object user ' + objectUser);

				if (!spaceUser){                                            
				    $scope.usersOrganization.push(objectUser);               
				}                                                                         
				if ($scope.currentUser.name === userOrg.entity.username){     
				    $scope.currentUser.currentManager = spaceManager;         
				}                                                                
			    });                                                                   
		    }, function(err) {                                                         
			$log.error(err.data.description);                                        
		    });                                                                          
	    };
	    
	    //$scope.retrieveRolesOfAllUsers();     
	    
	    $scope.showApp = function(appId, event) {                                                   
		window.alert(appId);

		if (event.ctrlKey==1){                                                                 
		    window.open('#/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId + '/applications/' + appId);                                                                                     
		    
		}else{                                                                                  
		    window.location = '#/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId + '/applications/' + appId;                                                                               
		}                                                                                        
	    };

	    $scope.showService = function(serviceId, event) {
		
		window.alert(serviceId);
		
                if (event.ctrlKey==1){		
                    window.open('#/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId + '/serviceInstances/' + serviceId);	
                }else{                                                                           
                    window.location = '#/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId + '/serviceInstances/' + serviceId;  
                }			       
            }
	    
	    $scope.addApplication = function(appName) {                                                
		var application = {                                                                     
		    'name': appName,                                                                     
		    'orgId': $scope.organizationId,                                                      
		    'spaceId': $scope.id,                                                                
		    'application': null                                                                   
		};
	    };  
	    
	    $scope.editSpace = function(id) {                                                            
		var space = {                                                                            
		    id: $scope.id,                                                                        
		    name: $scope.name                                                                     
		};
	    };
	    
	    $scope.deleteSpace = function(id) {                                                           
		var space = {                                                                             
		    id: $scope.id,                                                                        
		    name: $scope.name                                                                     
		};
	    };   

	    $scope.editApplication = function(application) {                                              
		application = {                                                                         
		    'id' : application.id,                                                               
		    'name' : application.name                                                             
		};
	    }; 

	    $scope.deleteApplication = function(applicationId) {   
	    };                                                                                            

	    // delete service instance  
	    $scope.deleteServiceInstance = function(serviceInstance) {  
	    };

	    // new route                                                                               
	    $scope.addRoute = function(routeName) {                                                      
		var route = {                                                                          
		    domainId: '',                                                                        
		    spaceId: $scope.id,                                                                   
		    orgId: $scope.organizationId,                                                        
		    host: ''                                                                                   
                };          
	    }; 

	    $scope.deleteRoute = function(route) {                                                        
		var routeId = route.id;       
	    };   

	    $scope.deleteOrphanedRoutes = function(routes) {    
	    };  

	    $scope.associateRouteWithApp = function(route, applications) {                               
		$scope.showOrphanedRoute = false;                                                        

		for (var j = 0; j < route.apps.length; j++) {                                            
		    if (route.apps.length===0) $scope.showOrphanedRoute = true;                           
		    for (var i = 0; i < applications.length; i++) {                                      
			if (route.apps[j].id === applications[i].id) {                                   
			    applications.splice(i, 1);                                                   
			    break;                                                                
			}                                                                                 
		    }                                                                                    
		}                                                                                        
		
		var routeId = route.id;               
	    };    

	    $scope.disassociateRouteWithApp = function(route) {  
	    }; 

	    $scope.addUser = function() {                                                                  
		var users = $scope.usersOrganization;   
	    };                                                                                            

	    $scope.deleteUser = function(user) {   
	    };                                                                                            

	    $scope.addManager = function(username) {                                                        
		var user = {                                                                             
		    'spaceId': $scope.id,                                                                
		    'name': username                                                                       
		};
	    };                                                                                             

	    $scope.deleteManager = function(userId) {                                                       
		var user = {                                                                            
		    'spaceId': $scope.id,                                                           
		    'id': userId                                                                          
		};
	    };                                                                                            
	    
	    $scope.addDeveloper = function(username) {                                                       
		var user = {                                                                              
		    'spaceId': $scope.id,                                                                 
		    'name': username                                                                    
		};

	    };                                                                                            

	    $scope.deleteDeveloper = function(userId) {                                                    
		var user = {                                                                              
		    'spaceId': $scope.id,                                                                 
		    'id': userId                                                                           
		};
	    };                                                                                             

	    $scope.addAuditor = function(username) {                                                         
		var user = {                                                                             
		    'spaceId': $scope.id,                                                                 
		    'id': username                                                                         
		};
	    };                                                                                             
	    
	    $scope.deleteAuditor = function(userId) {     
		var user = {                                                                              
		    'spaceId': $scope.id,                                                                 
		    'id': userId                                                                           
		};
	    };  
	}]);