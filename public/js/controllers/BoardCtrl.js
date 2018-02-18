angular.module('board').controller('boardCtrl', function($scope, boardService) {

	$scope.pinStatus = [];
	$scope.anaValues = [];
	
	function init() {
		var i;
    	for (i = 0; i < 35; i++) {
      		$scope.pinStatus.push(false);
			$scope.anaValues.push(0);
    	}
	}
	
	$scope.pinClick = function (value, pin) {
		$scope.pinStatus[pin] = value;
		
		boardService.pinSetValue(value, pin)
		.then(function (response) {
			console.log('==== ' + response.data);
		});
	}
	
	$scope.readAnaValue = function (pin) {
		boardService.getAnaValue(pin)
		.then(function (response) {
			console.log('==== ' + response.data);
		});
	}
	
});
