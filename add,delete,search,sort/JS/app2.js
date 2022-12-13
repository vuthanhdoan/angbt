var myApp = angular.module("MyList", []);
myApp.controller("myListController", function($scope){
   $scope.items = ["HTML", "CSS", "JS"];
   $scope.newItem = "";
   $scope.pushItem = function(){
      if($scope.newItem != ""){
         $scope.items.push($scope.newItem);
         $scope.newItem = "";
      }
   }
   $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
   }
});