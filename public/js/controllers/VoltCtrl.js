angular.module('volt').controller('voltCtrl', function($scope, voltService) {

	$scope.voltValues = {};
	$scope.activePowerData = [];
	
	var loadVoltValues = function () {
		//console.log('passei load');
		voltService.getVoltValues()
		.then(function (response) {
			return $scope.voltValues = response.data;
		});
	};
	
	$scope.loadVolts = function () {
		//console.log('click loadVolts!');
		loadVoltValues();
		$scope.activePowerData.push($scope.voltValues);
	};
	
	setInterval(function () {
		//console.log('interval!');
		loadVoltValues();
	}, 500);


$scope.dataSource =
{
    "chart": {
        "caption": "Volt",
        "subcaption": "Current",
        "xaxisname": "t",
        "yaxisname": "VA",
        //"numberprefix": "$",
        "theme": "fint"
    },
   
    "dataset": [
		{
            "seriesname": "Potencia Ativa",
            "renderas": "line",
            "showvalues": "0",
            "data": $scope.activePowerData
        }
    ]
}		

});
