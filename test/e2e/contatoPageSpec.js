describe('Cadastro de contatos', function() {
    this.timeout(80000);

    beforeEach(function() {
        browser.get('http://localhost:3000/#/contato');
    });
    it('Deve cadastrar um contato', function() {
        var aleatorio =
            Math.floor((Math.random() * 10000000) + 1);
        var nome = 'teste' + aleatorio;
        var email = 'teste@email' + aleatorio;
    });
});