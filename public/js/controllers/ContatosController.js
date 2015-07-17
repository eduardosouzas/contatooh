angular.module('contatooh').controller('ContatosController',function($scope,$routeParams) {
	$scope.total = 0;

	$scope.incrementa = function(){
	$scope.total++;
	};
});