
const el = require ("../4.compracomcadastroválido/elements").ELEMENTS
class Cválido {
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
        cy.get(el.botãoentrar).click();
        cy.get(el.finalizarCompra).click();
        cy.get(el.continuarEndereço,{timepout:800000}).click();
    }
    formadePagamento(){
        cy.get(el.pagarBoleto).click();
        cy.get(el.aceitoTermos).click();
        cy.get(el.botaoComprar).click();
    }

}

export default new Cválido ();