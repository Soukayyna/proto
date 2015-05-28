"use strict"; 
 
LeanCanvas.controller("logInCtrl",
	function logInCtrl ($scope,angularFire,$cookieStore,$window,$location) {

		var user = {};
		$scope.checkedBool = false;
		
		$scope.logIn = function() {
		  if($scope.email === "souka@souka" && $scope.password==="souka")
			{
				user.email=$scope.email;
				$cookieStore.put('user',user);
				console.log("success");
				$location.path('/');
				$window.location.reload();
			}
			else
				console.log("failed");
		}

		$scope.checked = function() {
			$scope.checkedBool = -checkedBool;
			console.log("checkedBool=true");
		}
	}
	);