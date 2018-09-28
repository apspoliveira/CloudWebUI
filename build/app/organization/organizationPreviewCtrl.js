angular.module('app.organization')
.controller('OrganizationPreviewCtrl', 
	    ['$rootScope', '$scope', '$modal', '$log',
	     function($rootScope, $scope, $modal, $log) {
		    $scope.showContent = false;
		    $scope.showOrgCreation = false;
		    $scope.organizations = [];
		    $scope.nrOfOrganizations = 0;
		    
		    $scope.addOrganization = function() {                    
			
			var organization = { };            
			
			//window.alert('add organization');
			var modalInstance = $modal.open({                                                 
				templateUrl: 'app/organization/organizationAdd.html',
				controller: 'OrganizationAddCtrl',                                       
				resolve: {                                                                
				    organization: function() {                                            
					return organization;                                              
				    }                                                                      
				}                          
			    });    
		    };
		    
		    $scope.showOrg = function(orgId, event) {                                                            
			if (event.ctrlKey==1){                                                                   
			    window.open('#/organizations/' + orgId);                                                     
			}else{                                                                                           
			    window.location = '#/organizations/' + orgId;                                                
			}                                                                                                
		    };
		    
		    $scope.editOrganization = function(org) {                                                                                 
			var organization = {                                                                
			    'id' : org.id,                                 				 
			    'name' : org.name,                                                           
			    'quota_definition_guid' : org.quota_definition_guid                         
			};                                
		    }
		    
		    $scope.deleteOrganization = function(org) {   
			
			var organization = {                                  
			    'id' : org.id,                 
			    'name' : org.name,
			    'quota_definition_guid' : org.quota_definition_guid                                                         };
		    };
		    
		}]);