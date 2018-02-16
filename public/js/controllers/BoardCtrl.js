angular.module('board').controller('boardCtrl', function($scope, boardService) {

	$scope.pinStatus = [];
	
	function init() {
		var i;
    	for (i = 0; i < 35; i++) {
      		$scope.pinStatus.push(0);
    	}
	}
	
	$scope.pinClick = function (value, pin) {
		$scope.pinStatus[pin] = value;
		
		boardService.pinSetValue(value, pin)
		.then(function (response) {
			console.log('==== ' + response.data);
		});
	}
	
});
