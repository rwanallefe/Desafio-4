///<reference types="cypress"/>

import exclusão from '../support/pages.enjoei/5.exclusão/index'

describe ('Conta', () => {
          
    it ('Excluir conta', () => {
        exclusão.acessarSite();
        // cy.visit('https://www.enjoei.com.br/');
        exclusão.fecharpopupInicial();
        // cy.get('[data-test=button-fechar-modal] > .o-icon').click()
        exclusão.pesquisarLivros();
        // cy.get('[data-test=input-filtro-pesquisa]').type('Livros {enter}')
        exclusão.selecionarProduto();
        // cy.get(':nth-child(3) > .c-product-card > .c-product-card__img-wrapper > a > [data-test=image-prod]').click()
        exclusão.adicionaraSacolinha();
        // cy.get('[data-test=button-adicionar-sacolinha]').click()
        
        exclusão.fazerLogin();
        // //Fazer login (email anteriormente cadastrados)
        // cy.get('[data-test=input-email]').type('rwan_muniz@hotmail.com');                      
        // cy.get('[data-test=input-password]').type('123456789');
        // cy.get('[data-test=button-login-entrar]').click();
        exclusão.acessarAvatar();
        // cy.get('[data-test=button-bar-avatar] > .o-avatar').click();
        exclusão.acessarConfigurações();
        // cy.get('[data-test=button-menu-configuracoes]').click();    
        exclusão.deletarConta();
        // cy.get('.delete-account__column--action > .Button').click();
        // //Inserir a senha para confirmar a exclusão da conta
        // cy.get('.Form > .Form__wrapper > .Input').type('123456789');
        // cy.get('.Button--primary').click();
        exclusão.acessarSite();

    })

})