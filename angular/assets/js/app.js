var app = angular.module("App", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/index.htm',
			controller: "HomeController"
		})
	    .when('/team/:teamId?', {
			templateUrl: 'partials/team.htm',
			controller: "TeamsController"
	    })
	    .otherwise({
			templateUrl: 'partials/index.htm',
			controller: "HomeController"
		});
}]);


app.controller('HomeController', ['$scope', function ($scope) {
	$scope.topScores = topTeams;
}]);

app.controller('TeamsController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	if ($routeParams.teamId) {
		// list single team
		$scope.teamDetails = topTeams[$routeParams.teamId - 1];
		$scope.teamId = $routeParams.teamId;
	} else {
		// list all teams
		$scope.teams = topTeams;
	}
}]);