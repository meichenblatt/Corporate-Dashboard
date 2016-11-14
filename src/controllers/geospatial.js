DashboardApp.controller('geospatialController', function($scope, Locations,$interval) {
	
	$scope.map = { center: { latitude: 40, longitude: -97.380979 }, zoom: 4 };
	getLocations();

	function getLocations(){
		Locations.get({}, function(locations){
    	
	    	$scope.markers = [];
	    	for(var key in locations){
				if(typeof locations[key] === 'object' && key != "$promise"){
					$scope.markers.push(locations[key]);
				}
			}
	    });
	}
    
	$scope.geoupdates = $interval(getLocations, 5000);

    $scope.$on("$destroy",function(){
      if (angular.isDefined($scope.geoupdates)) {
          $interval.cancel($scope.geoupdates);
      }
  });
});

