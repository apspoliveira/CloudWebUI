angular.module('app.privateDomain').controller('PrivateDomainPreviewCtrl', ['$rootScope', '$scope', '$modal', '$log', 'privateDomainService', function($rootScope, $scope, $modal, $log, privateDomainService) {
	    window.alert('Private domain preview ctrl');
	    
	    $scope.showContent = false;
	    $scope.privateDomains = [];
	    $scope.nrOfPrivateDomains = 0;
	    
	    privateDomainService.getPrivateDomains().then(function(response) {
		    window.alert('get private domains');
		    
		    var data = response.data;
		    $scope.nrOfPrivateDomains = data.total_results;

		    // create privateDomain objects
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
	}]);