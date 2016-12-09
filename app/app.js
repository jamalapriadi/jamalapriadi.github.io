var samApp=angular.module('samApp',['samController','ui.router', 'satellizer'])

.config(function($stateProvider, $urlRouterProvider, $authProvider) {

    // Satellizer configuration that specifies which API
    // route the JWT should be retrieved from
    //$authProvider.loginUrl = '/api/authenticate';

    // Redirect to the auth state if any other states
    // are requested other than users
    $urlRouterProvider.otherwise('/auth');
            
    $stateProvider
    	.state('auth',{
    		url:'/auth',
    		templateUrl:'views/auth.html',
			controller:'authCtrl'
    	})
    	.state('/',{
    		url:'/',
    		templateUrl:'views/beranda.html',
			controller:'dashboardCtrl'
    	})

    	.state('package-cprp',{
    		url:'/package-cprp',
    		templateUrl:'views/package-cprp.html'
    	})

    	.state('package-mediaplan',{
    		url:'/package-mediaplan',
    		templateUrl:'views/package-mediaplan.html'
    	})

    	.state('package-sponsorship',{
    		url:'/package-sponsorship',
    		templateUrl:'views/package-sponsorship.html'
    	})

    	.state('list-request',{
    		url:'/list-request',
    		templateUrl:'views/list-request.html'
    	})

    	.state('list-package',{
    		url:'/list-package',
    		templateUrl:'views/list-package.html'
    	})

    	.state('summary-package',{
    		url:'/summary-package',
    		templateUrl:'views/summary-package.html'
    	})

    	.state('change-password',{
    		url:'/change-password',
    		templateUrl:'views/change-password.html'
    	})
})
