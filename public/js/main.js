var app = angular.module('contatooh', ['ngRoute', 'ngResource']).config(function ($routeProvider) {
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'contatosController'
	});
	
	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController'
	});
	
	$routeProvider.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController'
	});
	
	$routeProvider.otherwise({
		redirectTo: '/contatos'
	});
});