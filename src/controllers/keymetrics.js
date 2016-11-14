DashboardApp.controller('keymetricsController', function($scope, ReportedIssues, Customers, OpenIssues, $interval) {
	
  $scope.series1 = ['Open Issues'];
  $scope.series2 = ['Paying Customers'];

  getMetrics();
  
  function getMetrics(){
    OpenIssues.get({}, function(openIssues){
      $scope.openIssues = openIssues.OpenIssues;
    })
    
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
  }


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


  $scope.updates = $interval(getMetrics, 5000);

  $scope.$on("$destroy",function(){
    if (angular.isDefined($scope.updates)) {
      $interval.cancel($scope.updates);
    }
  });

});