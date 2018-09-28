angular.module('app.space').controller('SpaceDetailsCtrl', ['$rootScope', '$scope', '$routeParams', '$log', function($rootScope, $scope, $routeParams, $log) {
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

            $scope.userName = localStorage.getItem('userName');

            $scope.showOrphanRoute = false;

            $scope.currentUser = {
                name: localStorage.getItem('userName'),
                spaceId: $routeParams.spaceId,
                currentManager: false
            };

	    // service summary from api                                                                    
	    $scope.getRoutesForTheSpace = function(){
                if ($scope.routes.length > 0) {
                    $scope.routes.length = 0;
                }

                $scope.showOrphanRoute = false;

                var applications = $scope.applications;
	    };

	    $scope.getApplicationsForTheSpace = function() {                                                   
                if ($scope.applications.length > 0) {                                            
		    $scope.applications.length = 0;                                         
		}                                           
		
		var promises = [];     
	    };    

	    $scope.getApplicationForTheSpace().then(function(){                                               
		    $scope.getRoutesForTheSpace();                                                       
		});   

	    $scope.retrieveRolesOfAllUsersForTheSpace = function() {                                  
		if ($scope.users.length > 0) {                                                        
		    $scope.users.length = 0;                                                        
		}
	    };                                                                                         
	    $scope.retrieveRolesOfAllUsersForTheSpace();   

	    $scope.retrieveRolesOfAllUsers = function() {                                                
		// clear spaces array on reload                                                          
		if ($scope.usersOrganization.length > 0) {                                               
		    $scope.usersOrganization.length = 0;                                                 
		}
	    };

	    //$scope.retrieveRolesOfAllUsers();     

	    $scope.showApp = function(appId, event) {                                                   
		if (event.ctrlKey==1){                                                                 
		    window.open('#/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId + '/applications/' + appId);                                                                                     

		}else{                                                                                  
		    window.location = '#/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId + '/applications/' + appId;                                                                               
		}                                                                                        
	    };

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