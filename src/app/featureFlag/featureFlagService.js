angular.module('app').factory('featureFlagService', ['$http', function($http) {
	    var featureFlagServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                                                                                                         
            var accessToken = localStorage.getItem('accessToken');

	    var _getAllFeatureFlags = function() {

		var url = '/v2/config/feature_flags';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
	    };

    var _getAppBits = function() {

		var url = '/v2/config/feature_flags/app_bits_upload';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
     };

    var _getAppScaling = function() {

		var url = '/v2/config/feature_flags/app_scaling';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };
    
    var _getDiegoDocker = function() {

		var url = '/v2/config/feature_flags/diego_docker';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

    var _getEnvironmentVariable = function() {

		var url = '/v2/config/feature_flags/env_var_visibility';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

     var _getHideMarketplace = function() {

		var url = '/v2/config/feature_flags/hide_marketplace_from_unauthenticated_users';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

    var _getPrivateDomain = function() {

		var url = '/v2/config/feature_flags/private_domain_creation';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

    var _getRouteCreation = function() {

		var url = '/v2/config/feature_flags/route_creation';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };
    
    var _getServiceInstanceCreation = function() {

		var url = '/v2/config/feature_flags/service_instance_creation';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

    var _getServiceInstanceSharing = function() {

		var url = '/v2/config/feature_flags/service_instance_sharing';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

     var _getSetUserRoles = function() {

		var url = '/v2/config/feature_flags/set_roles_by_username';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

var _getSpaceDeveloper = function() {

		var url = '/v2/config/feature_flags/space_developer_env_var_visibility';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

    var _getSpaceScopedPrivateBroker = function() {

		var url = '/v2/config/feature_flags/space_scoped_private_broker_creation';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

     var _getTaskCreation  = function() {

		var url = '/v2/config/feature_flags/task_creation';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

     var _getUnsetUserRoles  = function() {

		var url = '/v2/config/feature_flags/unset_roles_by_username';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };
    
	    var _getUserOrgCreationFeatureFlag = function() {

		var url = '/v2/config/feature_flags/user_org_creation';

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers
		};

		return $http.get(url, config);
	    };

    
    featureFlagServiceFactory.getAppBits = _getAppBits;
    featureFlagServiceFactory.getAppScaling = _getAppScaling;
    featureFlagServiceFactory.getDiegoDocker = _getDiegoDocker;
    featureFlagServiceFactory.getEnvironmentVariable = _getEnvironmentVariable;
    featureFlagServiceFactory.hideMarketplace = _hideMarketplace;
    featureFlagServiceFactory.getPrivateDomain = _getPrivateDomain;
    featureFlagServiceFactory.getRouteCreation = _getRouteCreation;
    featureFlagServiceFactory.getServiceInstanceCreation = _getServiceInstanceCreation;
    featureFlagServiceFactory.getServiceInstanceSharing = _getServiceInstanceSharing;
    featureFlagServiceFactory.getSetUserRoles = _getSetUserRoles;
    featureFlagServiceFactory.getSpaceDeveloper = _getSpaceDeveloper;
    featureFlagServiceFactory.getSpaceScopedPrivateBroker = _getSpaceScopedPrivateBroker;
    featureFlagServiceFactory.getTaskCreation = _getTaskCreation;
    featureFlagServiceFactory.getUnsetUserRoles = _getUnsetUserRoles;
    featureFlagServiceFactory.getUserOrgCreationFeatureFlag = _getUserOrgCreationFeatureFlag
	featureFlagServiceFactory.getAllFeatureFlags = _getAllFeatureFlags;
    featureFlagServiceFactory.getUserOrgCreationFeatureFlag = _getUserOrgCreationFeatureFlag;

	    return featureFlagServiceFactory;
	}]);
