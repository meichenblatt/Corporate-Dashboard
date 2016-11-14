DashboardApp.controller('dataviewController', function($scope, $http, $interval, Issues) {

	$scope.sortType     = 'id'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.search   = ''; 
    getIssues();
    
    function getIssues(){
    	Issues.success(function(issues) {
			var lines = issues.split("\n");
			$scope.Issues = [];
			lines.forEach(function(line, indx){
				if (indx === 0){} else{

					var temp = line.split(",");

					var obj = {};
					obj.id = parseInt(temp[0]);
					obj.created = new Date(temp[1]);
					obj.closed = new Date(temp[2]);
					obj.name = temp[3];
					obj.email = temp[4];
					obj.description = temp[5];

					$scope.Issues.push(obj);
				}
			});
		});
    }
	
	$scope.dataupdates = $interval(getIssues, 15000);

    $scope.$on("$destroy",function(){
   	 	if (angular.isDefined($scope.dataupdates)) {
    		$interval.cancel($scope.dataupdates);
    	}
  	});
});
