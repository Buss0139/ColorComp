
var myApp = angular.module("myApp", []);

myApp.controller('projectController', ['$scope', function($scope){

//Directory
$scope.projectURL = {
  omulu: "./views/partials/omulu.html",
  craftTracker: "./views/partials/craft-tracker.html",
  medicationTracker: "./views/partials/medication-tracker.html"
};

$scope.projectActive = {
  omulu: false,
  craftTracker: false,
  medicationTracker: false
};

//Starting project
$scope.activeTab = $scope.projectURL['omulu'];
$scope.showMore = false;
$scope.projectActive['omulu'] = true;

$scope.changeShow = function(){
    $scope.showMore = !$scope.showMore;
};

$scope.changeTab = function(project){
  $scope.activeTab = $scope.projectURL[project];
  $scope.showMore = false;

  for (element in $scope.projectActive){
    if (element == project){
      $scope.projectActive[element] = true;
    } else {
      $scope.projectActive[element] = false;
    }
  }
};

}]);
