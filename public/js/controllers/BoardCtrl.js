angular.module('board').controller('boardCtrl', function($scope, boardService) {

	$scope.digValues = {};
	$scope.anaValues = {};
	
	var loadDigValues = function () {
		console.log('passei dig values');
		boardService.getDigValues()
		.then(function (response) {
			addValue(response.data);
			return $scope.digValues = response.data;
		});
	};
	var loadAnaValues = function () {
		console.log('passei ana values');
		boardService.getDigValues()
		.then(function (response) {
			addValue(response.data);
			return $scope.anaValues = response.data;
		});
	};
	
});
