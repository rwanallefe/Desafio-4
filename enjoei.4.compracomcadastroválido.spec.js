///<reference types="cypress"/>
import Cválido from '../support/pages.enjoei/4.compracomcadastroválido/index'

describe ('Compra', () => {
          
    it ('Realizar uma compra com cadastro validado', () => {
        Cválido.acessarSite();
        // cy.visit('https://www.enjoei.com.br/');
        Cválido.pesquisarProd();
        // cy.get('[data-test=button-fechar-modal] > .o-icon').click();
        // cy.get('[data-test=input-filtro-pesquisa]').type('Livros {enter}');
        // cy.get(':nth-child(3) > .c-product-card > .c-product-card__img-wrapper > a > [data-test=image-prod]').click();
        // cy.get('[data-test=button-adicionar-sacolinha]').click();
        Cválido.login();
        // //Fazer login
        // cy.get('[data-test=input-email]').type('iasbarreto04@gmail.com');                      
        // //Trocar para um e-mail válido
        // cy.get('[data-test=input-password]').type('iasmin0411');
        // cy.get('[data-test=button-login-entrar]').click();
        // cy.get('.c-seller-bar__actions-submit').click();
        // cy.get(':nth-child(1) > .-xs-primary',{timepout:800000}).click();
        Cválido.formadePagamento();
        // //Selecionar forma de pagamento
        // cy.get('[data-method="bank_slip"]').click();
        // cy.get('[data-panels-name="payment-bank-slip"] > .l-checkout-payment-option > .Form__wrapper > .Checkbox > .Checkbox__label').click();
        // cy.get('[data-panels-name="payment-bank-slip"] > .l-checkout-payment-option > .Form__wrapper > .-xs-medium').click();
    })

    
})