angular.module('app.privateDomain').controller('PrivateDomainDetailsCtrl', ['$route', '$rootScope', '$scope', '$routeParams', '$log', 'privateDomainService', function($route, $rootScope, $scope, $routeParams, $log, privateDomainService) {
	    
	    $scope.name = '';
            $scope.id = $routeParams.organizationId;
	    
	    $scope.nrOfSharedOrganizations = 0;
	    $scope.sharedOrganizations = [];
	    
	    $scope.nrOfPrivateDomains = 0;
	    $scope.privateDomains = [];

	    $scope.getPrivateDomainsByName = function () {
		privateDomainService.getPrivateDomainsByName().then(function(response) {
			window.alert('get private domains by name');

			var data = response.data;
			$scope.nrOfPrivateDomains = data.total_results;

			window.alert(data.resources);
			
			angular.forEach(data.resources, function(privateDomain, i) {
				
				var objectPrivateDomain = {
				    id: privateDomain.metadata.guid,
				    url: privateDomain.metadata.url,
				    name: privateDomain.entity.name,
				    organization_id: privateDomain.entity.owning_organizaton_guid
				}
				
				$scope.privateDomains.push(objectPrivateDomain);
			    });
		    }, function (err, status) {
			$log.error(err);
		    });	
	    }
	    
	    $scope.getPrivateDomainsByName();
	    
	    $scope.getSharedOrganizationsForThePrivateDomain = function() {
		privateDomainService.getSharedOrganizationsForThePrivateDomain($scope.id).then(function(response) {
			window.alert('get shared organizations for the private domain');
			
			var data = response.data;
			$scope.nrOfSharedOrganizations = data.total_results;
			
			window.alert(data.resources);
			
			angular.forEach(data.resources, function(privateDomain, key) {
				var objectSharedOrganization = {
				    id: privateDomain.metadata.guid,
				    url: privateDomain.metadata.url,
				    name: privateDomain.name,
				    billing_enabled: privateDomain.billing_enabled,
				    status: privateDomain.status,
				    quota_definition_url: privateDomain.quota_definition_url
				};
				
				$scope.sharedOrganizations.push(objectSharedOrganization);
			    });			
		    }, function(err) {
			$log.error(err.data.description);
		    });
	    }
	    
	    $scope.getSharedOrganizationsForThePrivateDomain();
	    
	    $scope.getPrivateDomain = function() {
		// get particular private domain                                             
		privateDomainService.getPrivateDomain($scope.id).then(function(response) {

			var data = response.data;
			
			$scope.id = data.metadata.guid;
			$scope.url = data.metadata.url;
			$scope.name = data.entity.name;
			$scope.organization_id = data.entity.owning_organization_guid;
		    }, function (err) {
			window.alert(err.data.description);
		    });
	    }
	}]);