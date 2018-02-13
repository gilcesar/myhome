angular.module('board').factory('boardService', function($http) {
    var _getDigValues = function(){
    	console.log('http dig')
	    return $http.get('/api/board/dig');
    };
    var _getAnaValues = function(){
    	console.log('http ana')
	    return $http.get('/api/board/ana');
    };

	return {
		getDigValues: _getDigValues
		,getAnaValues: _getAnaValues
		//,save: _save
	};
});

