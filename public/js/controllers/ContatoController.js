angular.module('contatooh').controller('ContatoController',
    function ($scope, $routeParams, Contato) {

        if ($routeParams.contatoId) {
            Contato.get({id: $routeParams.contatoId},
                function (contato) {
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Contato n�o existe. Novo contato.'
                    };
                }
            );
        } else {
            $scope.contato = new Contato();
        }
        $scope.salva = function () {
            // l�gica de salvamento
            $scope.contato.$save()
                .then(function () {
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                // limpa o formul�rio
                    $scope.contato = new Contato();
                })
                .catch(function (erro) {
                    $scope.mensagem = {texto: 'N�o foi poss�vel salvar'};
                });
        };

        Contato.query(function(contatos) {
            $scope.contatos = contatos;
        });
    });