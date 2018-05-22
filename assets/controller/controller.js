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

app.controller('employeetypeCtrl', function($timeout, $scope) {
  $scope.criteria = null;
  $scope.criterion = null;
  $scope.loadCriterion = function() {
    return $timeout(function() {
      $scope.criterion =  $scope.criterion  || [
        { id: 1, name: 'Manager' },
        { id: 2, name: 'Supervisor' },
        { id: 3, name: 'Director' },
        { id: 4, name: 'Sales' }
      ];
    }, 650);
  };
})

app.controller('relationCtrl', function($timeout, $scope) {
  $scope.criteria = null;
  $scope.criterion = null;
  $scope.loadCriterion = function() {
    return $timeout(function() {
      $scope.criterion =  $scope.criterion  || [
        { id: 1, name: 'Spouse' },
        { id: 2, name: 'Child' },
        { id: 3, name: 'Wife' },
        { id: 4, name: 'Father' }
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


// upload

app.controller('UploadController', function($scope, fileReader) {
  $scope.imageSrc = "";
  
  $scope.$on("fileProgress", function(e, progress) {
    $scope.progress = progress.loaded / progress.total;
  });
});




app.directive("ngFileSelect", function(fileReader, $timeout) {
  return {
    scope: {
      ngModel: '='
    },
    link: function($scope, el) {
      function getFile(file) {
        fileReader.readAsDataUrl(file, $scope)
          .then(function(result) {
            $timeout(function() {
              $scope.ngModel = result;
            });
          });
      }

      el.bind("change", function(e) {
        var file = (e.srcElement || e.target).files[0];
        getFile(file);
      });
    }
  };
});

app.factory("fileReader", function($q, $log) {
var onLoad = function(reader, deferred, scope) {
  return function() {
    scope.$apply(function() {
      deferred.resolve(reader.result);
    });
  };
};

var onError = function(reader, deferred, scope) {
  return function() {
    scope.$apply(function() {
      deferred.reject(reader.result);
    });
  };
};

var onProgress = function(reader, scope) {
  return function(event) {
    scope.$broadcast("fileProgress", {
      total: event.total,
      loaded: event.loaded
    });
  };
};

var getReader = function(deferred, scope) {
  var reader = new FileReader();
  reader.onload = onLoad(reader, deferred, scope);
  reader.onerror = onError(reader, deferred, scope);
  reader.onprogress = onProgress(reader, scope);
  return reader;
};

var readAsDataURL = function(file, scope) {
  var deferred = $q.defer();

  var reader = getReader(deferred, scope);
  reader.readAsDataURL(file);

  return deferred.promise;
};

return {
  readAsDataUrl: readAsDataURL
};
});