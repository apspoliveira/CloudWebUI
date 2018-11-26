angular.module('app').factory('fileService', function($http) {
    var fileServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getFile = function(id, index) {
        var url = API_Endpoint+'/v2/apps/'+id+'/instances/'+index+'/files';

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
    
    fileServiceFactory.getFile = _getFile;

    return fileServiceFactory;
});

