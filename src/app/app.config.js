angular.module('app').config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/login', {
	      templateUrl: 'app/login/login.html',
		  controller: 'LoginCtrl'
		  })
      
      .when('/organizations', {
	      templateUrl: 'app/organization/organizationPreview.html',
		  controller: 'OrganizationPreviewCtrl'
		  })

      .when('/organizations/:organizationId', {
	      templateUrl: 'app/organization/organizationDetails.html',
		  controller: 'OrganizationDetailsCtrl'
		  })
      
      .when('/organizations/:organizationId/spaces/:spaceId', {
	      templateUrl: 'app/space/spaceDetails.html',
		  controller: 'SpaceDetailsCtrl'
		  })
      
      .when('/organizations/:organizationId/spaces/:spaceId/marketplace', {
	      templateUrl: 'app/marketplace/marketplaceAddService.html',
		  controller: 'MarketplaceAddServiceCtrl'
		  })

      .when('/organizations/:organizationId/spaces/:spaceId/marketplace/:serviceId', {
	      templateUrl: 'app/marketplace/marketplaceSelectServicePlan.html',
		  controller: 'MarketplaceSelectServicePlanCtrl'
		  })

      .when('/organizations/:organizationId/spaces/:spaceId/marketplace/:serviceId/plan/:servicePlanId', {
	      templateUrl: 'app/marketplace/marketplaceAddServiceInstance.html',
		  controller: 'MarketplaceAddServiceInstanceCtrl'
		  })

      .when('/organizations/:organizationId/spaces/:spaceId/serviceInstances/:serviceInstanceId', {
              templateUrl: 'app/serviceInstance/serviceInstanceDetails.html',
                  controller: 'ServiceInstanceDetailsCtrl'
                  })

      .when('/organizations/:organizationId/spaces/:spaceId/applications/:applicationId', {
	      templateUrl: 'app/application/applicationDetails.html',
		  controller: 'ApplicationDetailsCtrl'
		  })

      .when('/organizations/:organizationId/services/:serviceId', {
	      templateUrl: 'app/service/serviceDetails.html',
		  controller: 'ServiceDetailsCtrl'
		  })
      
      .when('/organizations/:organizationId/privateDomains/:privateDomainId', {
	      templateUrl: 'app/privateDomain/privateDomainDetails.html',
		  controller: 'PrivateDomainDetailsCtrl'
		  })
      
      .when('/privateDomains', {
	      templateUrl: 'app/privateDomain/privateDomainPreview.html',
		  controller: 'PrivateDomainPreviewCtrl'
		  })
      
      .when('/serviceBindings', {
              templateUrl: 'app/serviceBinding/serviceBindingPreview.html',
                  controller: 'ServiceBindingPreviewCtrl'
		  })
      
      .when('/marketplace', {
	      templateUrl: 'app/marketplace/marketplaceAddService.html',
		  controller: 'MarketplaceAddServiceCtrl'
		  })
      
      .when('/marketplace/:serviceId', {
	      templateUrl: 'app/marketplace/marketplaceSelectServicePlan.html',
		  controller: 'MarketplaceSelectServicePlanCtrl'
		  })

      .when('/marketplace/:serviceId/plan/:servicePlanId', {
	      templateUrl: 'app/marketplace/marketplaceAddServiceInstance.html',
		  controller: 'MarketplaceAddServiceInstanceCtrl'
		  })

      .otherwise({
	      redirectTo: '/organizations'
		  });
	}]);

/*angular.module('app').config(['$httpProvider', function($httpProvider) {
	    $httpProvider.interceptors.push('authInterceptorService');
	    $httpProvider.withCredentials = true;
	    }]);*/
