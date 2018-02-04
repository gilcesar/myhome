angular.module('volt').factory('voltService', function($http) {
    var _getVoltValues = function(){
	    return $http.get('/api/volt');
    };

    //var _save = function(value){
	    //return $http.post('/api/volt', value); 
    //};

	return {
		getVoltValues: _getVoltValues
		//,save: _save
	};
});

