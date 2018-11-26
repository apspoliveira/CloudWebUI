/*angular.module('app').config(function($routeProvider) {
    $routeProvider
	.when('/login', {
	    templateUrl: 'app/login/login.html',
	    controller: 'LoginCtrl'
	})
    
	.when('/organizations', {
	    templateUrl: 'app/organization/organizationPreview.html',
	    controller: 'OrganizationPreviewCtrl'
	})
    
	.when('/serviceBindings', {
	    templateUrl: 'app/serviceBinding/serviceBindingPreview.html',
	    controller: 'ServiceBindingPreviewCtrl'
	})
    
	.otherwise({
	    redirectTo: '/login'
	});
	});*/
angular.module('app').config(function($routeProvider) {
  $routeProvider
      .when('/login', {
	      templateUrl: 'login/login.html'
		  })
      .when('/organization', {                                                                 
	      templateUrl: 'organization/organizationPreview.html',  
		  })
      //.when('/', {
      //templateUrl: 'login/login.html'
      //})
      .otherwise({
	      redirectTo: '/login'
		  });
    });
