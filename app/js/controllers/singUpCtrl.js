'use strict'; 

LeanCanvas.controller("singUpCtrl",
	function singUpCtrl ($scope,angularFire) {

			var fireSingUp = new Firebase('https://singup.firebaseio.com');

			angularFire(fireSingUp,$scope,'coordonnees');

			$scope.coordonnees = [];

			$scope.addMember= function(){
	
				var newMember = {
					First_Name: $scope.firstname,
					Family_Name: $scope.familyname,
					Entreprise: $scope.entreprise,
					Poste: $scope.poste,
					Country: $scope.country,
					City: $scope.city,
					Adress: $scope.adress,
					Phone_Number: $scope.phone,
					Email_Adress: $scope.email

				};


				$scope.coordonnees.push(newMember);
				$scope.firstname='';
				$scope.familyname='';
				$scope.entreprise='';
				$scope.poste='';
				$scope.country='';
				$scope.city='';
				$scope.adress='';
				$scope.phone='';
				$scope.email='';
			};

	});  