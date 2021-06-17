var calculatorApp = angular.module("calculatorApp", []);

calculatorApp.controller('calculatorController', function ($scope) {
    $scope.initial = "";
    $scope.value = 0;
    $scope.upper = function (value) {
        
        $scope.initial = $scope.initial + value;
    };
    $scope.evaluate = function () {
        try{
            $scope.value = eval($scope.initial);
            if(parseInt($scope.value)) {
                $scope.answer = $scope.value;
            }
        }
        catch {
            $scope.initial = "";
            alert("Enter valid number");
        }
    };

    $scope.clearAll=function() {
        $scope.initial="";
        $scope.value=0;
    };

    $scope.clearOne=function(){
        $scope.initial = $scope.initial.substring(0, $scope.initial.length - 1);
      }
});