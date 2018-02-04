angular.module('volt').controller('voltCtrl', function($scope, voltService) {

	$scope.voltValues = {};
	$scope.voltData = [];
	
	$scope.data = {
    	dataset0: $scope.voltData
    };

	//data.dataset0 = $scope.voltData;

	var loadVoltValues = function () {
		//console.log('passei load');
		voltService.getVoltValues()
		.then(function (response) {
			addValue(response.data);
			return $scope.voltValues = response.data;
		});
	};
	
	
	setInterval(function () {
		//console.log('interval!');
		loadVoltValues();
	}, 2000);
	
	var addValue = function (value) {
		var size = $scope.voltData.push(value);
		if(size > 10){
			$scope.voltData.splice(0,1);
		}
	};


//          $scope.data = {
//            dataset0: [
//              {x: 0, val_0: 0, val_1: 0, val_2: 0, val_3: 0},
//              {x: 1, val_0: 0.993, val_1: 3.894, val_2: 8.47, val_3: 14.347},
//              {x: 7, val_0: 4.927, val_1: 3.35, val_2: -13.074, val_3: -12.625}
//            ]
//          };



          $scope.options = {
            series: [
              {
                axis: "y",
                dataset: "dataset0",
                key: "entryTension",
                label: "An area series",
                color: "#1f77b4",
                type: ['line'],
                id: 'mySeries0'
              }
            ],
            axes: {x: {key: "time", type:"date"}}
          };
          
});
