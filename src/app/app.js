angular.module('app', [
		       'ngRoute',
		       'ngTouch',
		       'ngAnimate',
		       
		       'ui.bootstrap',
		       //'ui.bootstrap.demo',

                       'app.message',
		       
		       'app.application',
		       'app.auth',
		       'app.login',
		       'app.organization',
		       'app.space',
		       'app.marketplace',
                       'app.routes',
                       'app.domain',
                       'app.featureFlag',
                       'app.info',
                       'app.service',
                       'app.serviceBinding',
                       'app.serviceInstance',
                       'app.user'
		       ]);
