//  Controller News

app.controller('businessCtrl', function($timeout, $scope) {
  $scope.business = null;
  $scope.businesstype = null;
  $scope.loadBusinesstype = function() {
    return $timeout(function() {
      $scope.businesstype =  $scope.businesstype  || [
        { id: 1, name: 'All' },
        { id: 2, name: 'Group Term Life' },
        { id: 3, name: 'Personal Term Life' }
      ];
    }, 650);
  };
})
app.controller('statementCtrl', function($timeout, $scope) {
  $scope.statement = null;
  $scope.statements = null;
  $scope.loadStatements = function() {
    return $timeout(function() {
      $scope.statements =  $scope.statements  || [
        { id: 1, name: 'All' },
        { id: 2, name: 'Group Term Life' },
        { id: 3, name: 'Personal Term Life' }
      ];
    }, 650);
  };
})

app.controller('criteriaCtrl', function($timeout, $scope) {
  $scope.criteria = null;
  $scope.criterion = null;
  $scope.loadCriterion = function() {
    return $timeout(function() {
      $scope.criterion =  $scope.criterion  || [
        { id: 1, name: 'All' },
        { id: 2, name: 'Group Term Life' },
        { id: 3, name: 'Negotiation' },
        { id: 4, name: 'Pending' }
      ];
    }, 650);
  };
})


app.controller('PrintReportPolicyCtrl', function($timeout, $scope) {
  $scope.criteria = null;
  $scope.criterion = null;
  $scope.loadCriterion = function() {
    return $timeout(function() {
      $scope.criterion =  $scope.criterion  || [
        { id: 1, name: 'Select Print Report' },
        { id: 2, name: 'All' },
        { id: 3, name: 'Quotation Report' }
      ];
    }, 650);
  };
})


app.controller('cityCtrl', function($timeout, $scope) {
  $scope.criteria = null;
  $scope.criterion = null;
  $scope.loadCriterion = function() {
    return $timeout(function() {
      $scope.criterion =  $scope.criterion  || [
        { id: 1, name: 'Select City' },
        { id: 2, name: 'DKI Jakarta' },
        { id: 3, name: 'Tangerang' },
        { id: 4, name: 'Bogor' },
        { id: 5, name: 'Depok' },
        { id: 6, name: 'Bekasi' }
      ];
    }, 650);
  };
})

app.controller('datepickerCtrl', function() {
 this.myDate = new Date();
 this.isOpen = false;
})

app.controller('cb1Ctrl', function($scope) {
  $scope.data = {};
  $scope.data.cb1 = true;
})

app.controller('refferalCtrl', function($scope) {
    $scope.user = {
      name: 'ex:Diah',
      mobile: 'ex:081223223222',
      email: 'ex:email@gmail.com',
      refferal: 'https://www.ifwd.co.id/?data=huiRbwsUCWsdGRXoXrQCKRN7Xr6DBEs3ImxYIXcYnbMkJT%2F0uSq6n3sW%2F9c1NnQ%2B4llLdZ8DAdp3YNdDtiBlCg%3D%3D'
    };
  })
app.controller('achievementCtrl', achievementController);
function achievementController() {
};
