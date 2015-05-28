'use strict';
 
LeanCanvas.controller('projectsCtrl',
		function projectsCtrl ($scope) {
			
			$scope.projects=[
					{
						projectName: 'School Project',
						lastModif: 'One day later'
					},
					{
						projectName: 'Second Project',
						lastModif:'3 days ago'
					},
					{
						projectName: 'third Project',
						lastModif:'3 hours ago'
					},
					{
						projectName: 'fourd Project',
						lastModif:'4 hours ago'
					}

			];
					
		}); 