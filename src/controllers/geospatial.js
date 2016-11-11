DashboardApp.controller('geospatialController', function($scope) {
	
	$scope.map = { center: { latitude: 40, longitude: -97.380979 }, zoom: 4 };

	$scope.markers = [
		{id: "1", 
		latitude: 34.0522300,
		longitude: -118.2436800, 
		options: {labelClass:'labelClass',labelAnchor:'35 75',labelContent:'22'}},
		{id: "2", 
		latitude: 40.7142700, 
		longitude: -74.0059700, 
		options: {labelClass:'labelClass',labelAnchor:'35 75',labelContent:'58'}},
		{id: "3", 
		latitude: 25.7742700,
		longitude: -80.1936600, 
		options: {labelClass:'labelClass',labelAnchor:'35 75',labelContent:'87'}},
		{id: "4", 
		latitude: 47.6062100, 
		longitude: -122.3320700, 
		options: {labelClass:'labelClass',labelAnchor:'35 75',labelContent:'75'}}
		];

});
