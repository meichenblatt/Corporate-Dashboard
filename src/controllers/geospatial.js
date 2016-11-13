DashboardApp.controller('geospatialController', function($scope, Locations) {
	
	$scope.map = { center: { latitude: 40, longitude: -97.380979 }, zoom: 4 };

    Locations.get({}, function(locations){
    	
    	$scope.markers = [];
    	for(var key in locations){
			if(typeof locations[key] === 'object' && key != "$promise"){
				$scope.markers.push(locations[key]);
			}
		}
    });

});
