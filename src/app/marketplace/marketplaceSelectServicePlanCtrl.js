angular.module('app.marketplace').controller('MarketplaceSelectServicePlanCtrl', ['$q', '$rootScope', '$scope', '$routeParams', '$route', '$location', '$log', 'serviceService'/*, 'serviceBindingService', 'organizationService', 'spaceService', 'serviceInstanceState', 'messageService'*/, function($q, $rootScope, $scope, $routeParams, $route, $location, $log, serviceService/*, serviceBindingService, organizationService, spaceService, serviceInstanteState, messageService*/) {
	    window.alert('marketplace select service plan');
	    
	    $rootScope.rootFields.showContent = false;
	    $scope.serviceId = $routeParams.serviceId;
	    $scope.servicePlans = [];
	    
	    var getServicePlansForTheServicePromise = serviceService.getServicePlansForTheService($scope.serviceId);
	    
	    window.alert($scope.serviceId);
	    window.alert(getServicePlansForTheServicePromise);
	    
	    serviceService.getService($scope.serviceId).then(function(response){
		    
		    window.alert('get service');
		    
		    var service = response.data;
		                          
		    var extraData = JSON.parse(response.data.entity.extra);
		    
		    var objectService = {
			id: service.metadata.guid,
			//cope with cases where extraData is Null and avoid premature exit      
			name: service.entity.label,
			description: service.entity.description,
			longDescription: service.entity.long_description,
			provider: service.entity.provider,
			imageUrl: null,
			documentationUrl: service.entity.documentation_url,
			supportUrl: null
		    };
		    
		    $scope.selectedService=objectService;
		                                                                          
		}, function(err) {
		    window.alert(err.data.error_code + ' ' + err.data.description);
		    $log.error(err);
		});

	    /*getServicePlansForTheServicePromise.then(function(response) {
	      
		    window.alert('get service plans');

		    angular.forEach(response.data.resources, function(servicePlan, i) {
			    var extraData = JSON.parse(servicePlan.entity.extra);

			    // get costs                                                       
			    var costs = null;
			    if (extraData && extraData.costs) {
				var unit = extraData.costs[0].unit.replace('LY', '');
				
				var currency = null;
				var amount = null;
				for (i in extraData.costs[0].amount) {
				    currency = i;
				    amount = extraData.costs[0].amount[i];
				    continue;
				}
				
				if (currency !== null && amount !== null) {
				    costs = currency.toUpperCase() + ' ' + amount + '/' + unit;
				}
			    }
			    
			    var objectServicePlan = {
				id: servicePlan.metadata.guid,
				name: servicePlan.entity.name,
				description: servicePlan.entity.description,
				bullets: null,
				costs: costs
			    };
			    
			    $scope.servicePlans.push(objectServicePlan);
			});
		}, function(err) {
		    messageService.addMessage('danger', 'The service plans have not been loaded.');
		    $log.error(err);
		});
	    */
	    $scope.selectServicePlan = function(servicePlanId) {
		$location.path($location.url() + '/plan/' + servicePlanId);
		};
	    
	}]);
