'use strict';  

LeanCanvas.controller('MainPageCtrl',
	function MainPageCtrl ($scope,$cookieStore,$window,$location) {
		$scope.logoUrl = '/img/logs.jpg';

		$scope.logIn = function() {
			$location.path('/LogInPage.html');
			$window.location.reload();
		}

		$scope.singUp = function() {
			$location.path('/SingUpPage.html');
			$window.location.reload();
		}
	}
	);  