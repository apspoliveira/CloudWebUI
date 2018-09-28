angular.module('app.marketplace').controller('marketplaceAddServiceInstanceCtrl', ['$q', '$rootScope', '$scope','$routeParams', '$route', '$location' ,'$log', function($q, $rootScope, $scope, $routeParams, $route, $location, $log) {
	    $rootScope.rootFields.showContent = false;

	    $scope.organizations = [];
	    $scope.spaces = [];
	    $scope.applications = [];

	    $scope.serviceId = $routeParams.serviceId;
	    $scope.servicePlanId = $routeParams.servicePlanId;
	    $scope.organizationId = $routeParams.organizationId;
	    $scope.spaceId = $routeParams.spaceId;
	    $scope.applicationId = $routeParams.applicationId;

	    $scope.getOrganizations = function() { 
	    };

	    if ($scope.organizationId!==undefined){
		$scope.getOrganizations();
	    } else{
		$scope.getOrganizations();
		$scope.showSelectOrganization = true;
	    }

	    $scope.selectSpace = function() {
		// clear spaces array on reload                                                                          
		if ($scope.spaces.length > 0) {
		    $scope.spaces.length = 0;
		}
		
	    };

	    $scope.selectApplication = function() {
		// clear spaces array on reload                                                                          
		if ($scope.applications.length > 0) {
		    $scope.applications.length = 0;
		}

	    };

	    $scope.addServiceBinding = function(serviceInstanceId) {

		var serviceBinding = {
		    serviceInstanceId: serviceInstanceId,
		    applicationId: $scope.applicationId
		};

	    };

	    $scope.addServiceInstance = function() {

		var defer = $q.defer();

		$location.path('/organizations/' + $scope.organizationId + '/spaces' + $scope.spaceId);

		var serviceInstance = {
		    name: $scope.instanceName,
		    spaceId: $scope.spaceId,
		    servicePlanId: $scope.servicePlanId
		};

	    };



	}]);