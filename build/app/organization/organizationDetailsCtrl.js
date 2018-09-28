angular.module('app.organization').controller('OrganizationDetailsCtrl', ['$route', '$rootScope', '$scope', '$routeParams', '$log', function($route, $rootScope, $scope, $routeParams, $log) {
	    $rootScope.rootFields.showContent = false;
            $scope.disableShow=true;
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
            $scope.nrOfDomains = 0;

            // users                                                                                             
            $scope.users = [];
            $scope.nrOfOrganizationUsers = 0;
            //$scope.allUsersForOrganization = [];                                                               

            $scope.currentUser = {
                name: localStorage.getItem('userName'),
                currentManager: false
            };

	    // get spaces for the organization                                                          
	    $scope.getSpacesForTheOrganization = function() {                                                  
		// clear spaces array on reload                                                             
		if ($scope.spaces.length > 0) {                                                             
		    $scope.spaces.length = 0;                                                                  
		}
	    };      
	    $scope.getSpacesForTheOrganization(); 

	    $scope.retrieveRoleOfAllUsersForTheOrganization = function() {                                 
		// clear spaces array on reload                                                          
		if ($scope.users.length > 0) {                                                          
		    $scope.users.length = 0;                                                             
		}
	    };                                                                                                  
            $scope.retrieveRolesOfAllUsersForTheOrganization();          
	    
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

	    $scope.editSpace = function(space) {    
	    };   

	    $scope.editOrganization = function() {   
		var organization = {                                                                   
		    'id': $scope.id,                                                                   
		    'name': $scope.name,                                                               
		    'quota_definition_guid': $scope.quotaDefID                                           
		};
	    }

	    $scope.deleteOrganization = function() {  
		var organization = {
                    'id': $scope.id,
                    'name': $scope.name,
                    'quota_definition_guid': $scope.quotaDefID
                };
	    }

	    // add space                                                                                 
	    $scope.addSpace = function() {                                                               
		var space = {                                                                         
		    'organizationId': $scope.id                                                          
		};
	    }

	    // new domain                                                                                
	    $scope.newDomain = function() {                                                            
		var domain = {                                                                         
		    'organizationID': $scope.id                                                         
		};
	    }

	    // delete domain                                                                               
	    $scope.deleteDomain = function (domain) {    
	    };

	    // delete space                                                                              
	    $scope.deleteSpace = function (space) {    
	    };

	    $scope.addUser = function() {                                                                                       var spaces = $scope.spaces;
	    };   

	    $scope.disassociateUser = function(user) {                                                   
		var spaces =  $scope.spaces;               
	    };    

	    $scope.addManager = function(username) {                                                   
		var user = {                                                                            
		    'organizationId': $scope.id,                                                         
		    'name': username                                                                    
		};
	    };

	    $scope.deleteManager = function(userId) {                                                   
		var user = {                                                                           
		    'organizationId': $scope.id,                                                        
		    'id': userId                                                                         
		};
	    };  

	    $scope.addBillingManager = function(username) {                                  
		var user = {                                                                            
		    'organizationId': $scope.id,                                                         
		    'name': username                                                                      
		};
	    };

	    $scope.deleteBillingManager = function(userId) { 
		var user = {
                    'organizationId': $scope.id,
                    'id': userId
                };
	    };

	    $scope.addAuditor = function(username) {                               
		var user = {
                    'organizationId': $scope.id,
                    'name': username
		};
	    };

	    $scope.deleteAuditor = function(userId) {  
		var user = {
                    'organizationId': $scope.id,
                    'name': username
		};
	    };    

	    // delete user                                                                               
	    $scope.deleteUser = function (user) {      

	    };

	}]);