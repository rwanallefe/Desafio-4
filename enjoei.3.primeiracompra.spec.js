///<reference types="cypress"/>
import Primeiracompra from "../support/pages.enjoei/3.primeiracompra/index";
describe ('Compra', () => {
          
    it ('Realizar uma compra', () => {
        
        Primeiracompra.acessarSite();
        // //Acessar site
        // cy.visit('https://www.enjoei.com.br/');

        Primeiracompra.pesquisarProd();
        // //Fechar pop up
        // cy.get('[data-test=button-fechar-modal] > .o-icon').click();
        // //Pesquisar produto
        // cy.get('[data-test=input-filtro-pesquisa]').type('Livros {enter}');
        // //Slecionar produto
        // cy.get(':nth-child(3) > .c-product-card > .c-product-card__img-wrapper > a > [data-test=image-prod]').click();
        // //Adicionar a sacolinha
        // cy.get('[data-test=button-adicionar-sacolinha]').click();

        Primeiracompra.login();
        // //Fazer login
        // cy.get('[data-test=input-email]').type('teste123.qa@hotmail.com');                      
        // cy.get('[data-test=input-password]').type('grupo04primeiracompra');
        // cy.get('[data-test=button-login-entrar]').click();

        Primeiracompra.finalizardados();
        // //Finalizar cadastro do endereço (Primeira compra)
        // cy.get('.c-seller-bar__actions-submit').click();
        // //Preencher endereço
        // cy.get('#zipcode').type('49100000');
        // cy.get('#street').type('Rua amarela');
        // cy.get('#neighborhood').type('Ambevtech')
        // cy.get('#number').type('04');
        // cy.get('#complement').type('poste rosa')
        // cy.get(':nth-child(8) > .o-form__field > .o-checkbox > .o-checkbox__blank').click();
        // cy.get(':nth-child(9) > .o-button').click();
        // //Finalizar cadastro - informações pessoais (Primeira compra)
        // cy.get('#phone').type('21999779181');
        // cy.get('#taxpayer_registry').type('15835738790');
        // cy.get('#birth-date').type('14101994');
        // cy.get(':nth-child(4) > .o-form__field > .o-checkbox > .o-checkbox__blank').click();
        // cy.get(':nth-child(5) > .o-button').click();

        Primeiracompra.formaPagamento();
        //Selecionar forma de pagamento
        // cy.get('[data-method="bank_slip"]').click()
        // cy.get('[data-panels-name="payment-bank-slip"] > .l-checkout-payment-option > .Form__wrapper > .Checkbox > .Checkbox__label').click();
        // cy.get('[data-panels-name="payment-bank-slip"] > .l-checkout-payment-option > .Form__wrapper > .-xs-medium').click();


    })


})