'use strict';
LeanCanvas.factory('cookieData',
	function($cookieStore,$resource,$q){
		var resource1=$resource('/data/leanCanvas/1',{name:'@name'}).get({name:"lastLeanCanvasId"});
		var resource2=$resource('/data/leanCanvas/:id',{id:'@id'});
		var resource3=$resource('/data/leanCanvas/:id',{id:'@id'});
		return{
			logInTrue:function(){
				return ($cookieStore.get('client')!==undefined);
			},
			lastLeanCanvasId:function(){
				
				var k=resource1["idLeanCanvas"];
				var info={};
				info.id=1;
				info.idLeanCanvas=k+1;
				info.name="lastLeanCanvasId";
				var deferred=$q.defer();
				resource2.save(info,
					 function(response){deferred.resolve(response);},
		            function(response){deferred.reject(response);});
				return k;
			},
			
			getAllCanvas:function(){
				var deferred=$q.defer();
				return resource3.query();
				  
				   
			}
			
			

		};
	});

