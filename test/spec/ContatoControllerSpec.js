describe("ContatoController", function () {

    var $scope;

    beforeEach(function() {
        module('contatooh');
        inject(function($injector) {
            $scope = $injector.get('$rootScope').$new();
        });
    });

    it("Deve criar um Contato vazio quando  nenhum par�metro de rota for passado",
    inject(function($controller) {
        $controller('ContatoController');
        expect($scope.contato._id).toBeUndefined();
    }));
});

