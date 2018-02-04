angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/volt', {
            templateUrl: 'views/volt.html',
            controller: 'voltCtrl'
        });
        
    $locationProvider.html5Mode(true);

}]);