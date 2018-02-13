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
        })
        .when('/board', {
            templateUrl: 'views/board.html',
            controller: 'boardCtrl'
        });
        
    $locationProvider.html5Mode(true);

}]);