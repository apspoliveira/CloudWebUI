angular.module('app.organization').factory('organizationService', ['$http', function($http) {
	    var organizationServiceFactory = {};

	    var _addOrganization = function(organization) {

                var url = '/v2/organizations';
		
                // data                                                                                    
		var data = {
                    'name': organization.name
		};

                // http headers                                                                          
		headers= {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                };
		
                var config = {
                    headers: headers
                };
		
                return $http.post(url, data, config);
            };
	    
	    organizationServiceFactory.addOrganization = _addOrganization;

	    return organizationServiceFactory;
        }]);