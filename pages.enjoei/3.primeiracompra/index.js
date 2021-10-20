const el = require ('../3.primeiracompra/elements').ELEMENTS
class primeiraCompra {
    acessarSite(){
        cy.visit(el.site);
    }

    pesquisarProd(){
        cy.get(el.fecharpop01).click();
        cy.get(el.pesquisarProd).type('Livros {enter}');
        cy.get(el.selecionarProd).click();
        cy.get(el.addSacolinha).click();
     }

     login(){
        cy.get(el.emailLogin).type('teste123.qa@hotmail.com');                     
        cy.get(el.senhaLogin).type('grupo04primeiracompra');
        cy.get(el.botãoEntrar).click();
}
    finalizardados(){
        cy.get(el.finalizarCompra).click();
        cy.get(el.cep).type('49100000');
        cy.get(el.rua).type('Rua amarela');
        cy.get(el.bairro).type('Ambevtech')
        cy.get(el.númeroEnd).type('04');
        cy.get(el.complemento).type('poste rosa')
        cy.get(el.aceiteNovoEnd).click();
        cy.get(el.botãoContinuar).click();
        cy.get(el.nTelefone).type('21999779181');
        cy.get(el.nCPF).type('15835738790');
        cy.get(el.dataNascimento).type('14101994');
        cy.get(el.garantirCPF).click();
        cy.get(el.botãoContinuarpósCPF).click();
    }
    formaPagamento(){
        cy.get(el.pagarBoleto).click()
        cy.get(el.aceitoTermos).click();
        cy.get(el.botãoComprar).click();

    }

}

export default new primeiraCompra ();