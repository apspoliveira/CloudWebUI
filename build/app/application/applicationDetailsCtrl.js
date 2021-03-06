angular.module('app.application').controller('ApplicationDetailsCtrl', ['$rootScope', '$scope', '$routeParams', '$log', function($rootScope, $scope, $routeParams, $log) {
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
	    
	    // app summary  
	    $scope.getApplicationSummary = function() {  
	    };                                                                                                           
	    $scope.getApplicationSummary();    
	    
	    // get instances                                                                                             
	    $scope.getInstances = function() {      
	    };                                                                                                                                                                                             
	    // get application events  
	    
	    
	    $scope.editApplication = function() {                                                                        
		var application = {                                                                            
		    'id': $scope.applicationId,                                                          
		    'name': $scope.name                                                                  
		};
		
	    };   
	    
	    $scope.deleteApplication = function() {                                                                             var applicationId = $scope.applicationId;      
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
		var config = {                                                                            
		    applicationId: $scope.applicationId,                                                
		    scale: $scope.scale                                                                  
		};
	    };
	    
	}]);