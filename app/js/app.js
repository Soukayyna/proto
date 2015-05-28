'use strict'; 

var LeanCanvas = angular.module('LeanCanvas', ['firebase','ngResource','ngCookies','highcharts-ng']).
		config(function($routeProvider,$locationProvider){
			$routeProvider.when('/singUp',{
				templateUrl:'/SingUpPage.html',
				controller:'singUpCtrl'
			}),
			$routeProvider.when('/logIn',{
				templateUrl:'/LogInPage.html',
				controller:'logInCtrl'
			});

			$routeProvider.when('/logOut',{
			templateUrl:'/app/LogOutPage.html',
			controller: 'logOutCtrl'
		});
		$routeProvider.when('/leanCanvas',{
			templateUrl:'/LeanCanvasPage.html',
			controller:'leanCanvasCtrl'
		});

		$routeProvider.when('/newProject',{
			templateUrl:'/NewProject.html',
			controller: 'newProjectCtrl'
		});
		
		$routeProvider.when('/projects',{
				templateUrl:'/Projects.html',
				controller:'projectsCtrl'
			});
		/*$routeProvider.when('/dashboard',{
			templateUrl:'/views/templates/dashboard.html',
			controller:'DashboardController'

		});
		$routeProvider.when('/leanCanvass',{
			templateUrl:'/views/templates/leanCanvass.html',
			controller:'LeanCanvasController'

		});*/
		$locationProvider.html5Mode(true);


		});

