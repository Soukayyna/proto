'use strict';  
 
LeanCanvas.controller('leanCanvasCtrl',
		function leanCanvasCtrl($scope, angularFire){

/* ********************************problem********************************/
			$scope.boolProb='false';

			var fireProb = new Firebase('https://canvasproblem.firebaseIO.com');

			angularFire(fireProb,$scope,'problems');

			$scope.problems = [];

			$scope.addProblem = function(){

				var newProblem = {
					text: $scope.probTxt
				};

				$scope.problems.push(newProblem);
				$scope.probTxt= '';
			};

			//function to delete a problem
			$scope.removeProblem = function(start){
				$scope.problems.splice(start,1);
			};

/* ********************solution***************************************/
			$scope.boolSol='false';

			var fireSol = new Firebase('https://canvassolution.firebaseIO.com');

			angularFire(fireSol,$scope,'solutions');

			$scope.solutions = [];

			$scope.addSolution = function(){

				var newsolution = {
					text: $scope.solTxt
				};

				$scope.solutions.push(newsolution);
				$scope.solTxt= '';
			};

			//function to delete a problem
			$scope.removeSolution = function(start){
				$scope.solutions.splice(start,1);
			};

/* ********************Key metrics***************************************/
			$scope.boolKey='false';

			var fireMetr = new Firebase('https://canvaskeymetric.firebaseIO.com');

			angularFire(fireMetr,$scope,'metrics');

			$scope.metrics = [];

			$scope.addMetric = function(){

				var newmetric = {
					text: $scope.metrTxt
				};

				$scope.metrics.push(newmetric);
				$scope.metrTxt= '';
			};

			//function to delete a problem
			$scope.removeMetric = function(start){
				$scope.metrics.splice(start,1);
			};

/* ********************Unique Value Proposition***************************************/
			$scope.boolUvp = 'false';

			var fireUvp = new Firebase('https://uniquevaluepropositi.firebaseIO.com');

			angularFire(fireUvp,$scope,'uvps');

			$scope.uvps = [];

			$scope.addUVP = function(){ 

				var newuvp = {
					text: $scope.uvpTxt
				};

				$scope.uvps.push(newuvp);
				$scope.uvpTxt= '';
			};

			//function to delete a problem
			$scope.removeUVP = function(start){
				$scope.uvps.splice(start,1);
			};

/* ****************************Unfair advantage***************************************/
			$scope.boolAdv='false';
			var fireAdv = new Firebase('https://unfairadvantage.firebaseIO.com');

			angularFire(fireAdv,$scope,'advantages');

			$scope.advantages = [];

			$scope.addAdvantage = function(){

				var newadvantage = {
					text: $scope.advTxt
				};

				$scope.advantages.push(newadvantage);
				$scope.advTxt= '';
			};

			//function to delete a problem
			$scope.removeAdvantage = function(start){
				$scope.advantages.splice(start,1);
			};
/* ****************************Channel***************************************/
			$scope.boolChan='false';

			var fireChannel = new Firebase('https://channel.firebaseIO.com');

			angularFire(fireChannel,$scope,'channels');

			$scope.channels = [];

			$scope.addChannel = function(){

				var newchannel = {
					text: $scope.chanTxt
				};

				$scope.channels.push(newchannel);
				$scope.chanTxt= '';
			};

			//function to delete a problem
			$scope.removeChannel = function(start){
				$scope.channels.splice(start,1);
			};
/* ****************************Customer Segment***************************************/
			$scope.boolCus = 'false';

			var fireCustomer = new Firebase('https://customersegment.firebaseIO.com');

			angularFire(fireCustomer,$scope,'customs');

			$scope.customs = [];

			$scope.addCustom = function(){

				var newcustom = {
					text: $scope.custTxt
				};

				$scope.customs.push(newcustom);
				$scope.custTxt= '';
			};

			//function to delete a problem
			$scope.removeCustom = function(start){
				$scope.customs.splice(start,1);
			};

/* ****************************Coststructure***************************************/
			$scope.boolCost = 'false';

			var fireCost = new Firebase('https://coststructure.firebaseIO.com');

			angularFire(fireCost,$scope,'costs');

			$scope.costs = [];

			$scope.addCost = function(){

				var newcost = {
					text: $scope.costTxt
				};

				$scope.costs.push(newcost);
				$scope.costTxt= '';
			};

			//function to delete a problem
			$scope.removeCost = function(start){
				$scope.costs.splice(start,1);
			};




/***********************************Revenue stream*****************************************/
			$scope.boolRev='false';

			var fireRev = new Firebase('https://revenuestream.firebaseio.com');

			angularFire(fireRev,$scope,'revs');

			$scope.revs = [];

			$scope.addRev = function(){

				var newrev = {
					text: $scope.revTxt
				};

				$scope.revs.push(newrev);
				$scope.revTxt= '';
			};

			//function to delete a problem
			$scope.removeRev = function(start){
				$scope.revs.splice(start,1);
			};

		});
