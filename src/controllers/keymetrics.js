DashboardApp.controller('keymetricsController', function($scope, ReportedIssues, Customers) {
	
  $scope.series1 = ['Open Issues'];
  $scope.series2 = ['Paying Customers'];

  $scope.openIssues = 24;
  
  ReportedIssues.query(function(reports){
  	$scope.labels = [];
  	$scope.data = [];
  	var data = [];
  	reports.forEach(function(report){
  		$scope.labels.push(report.dates);
  		data.push(report.data);
  	})
  	$scope.data.push(data);
  });

  Customers.query(function(customers){
  	$scope.Cuslabels = [];
  	$scope.Cusdata = [];
  	var data = [];
  	customers.forEach(function(customer){
  		$scope.Cuslabels.push(customer.dates);
  		data.push(customer.data);
  	})
  	$scope.Cusdata.push(data);
  });

 
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

});