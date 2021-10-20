///<reference types="cypress"/>
import Buscar from '../support/pages.enjoei/2.busca/index.buscar';
import Yeyezar from '../support/pages.enjoei/2.busca/index.yeyezar';

describe ('Busca com filtros', () => {
    it('Busca', () => {
        cy.viewport (1200,1080);

        Buscar.busca_livro();
        Buscar.etc_tal();
        Buscar.categoria();
        Buscar.preco();
        Buscar.ultimas_24h();

        // cy.visit('https://www.enjoei.com.br/');
        // cy.get('[data-test=button-fechar-modal] > .o-icon > use').click();
        // // Buscar livro
        // cy.get('[data-test=input-filtro-pesquisa]').type('livro{enter}');
        // // Filtro categoria -> etc&tal -> Outros 
        // cy.get('[data-test=button-etctal]').click();
        // // Etc&tal -> Outros 
        // cy.get('[data-test=dropdown-marca]').click();
        // cy.get('.is-open > .-xs-gutter-medium > :nth-child(1) > .o-checkbox > .o-checkbox__blank').click();
        // // Preço -> R$30 - R$70
        // cy.get('[data-test=dropdown-preco]').click();
        // cy.get('[data-test=input-preco-de]').type('30');
        // cy.get('[data-test=input-preco-ate]').type('70');
        // cy.get('[data-test=button-preco-aplicar]').click();
        // // últimas 24 horas
        // cy.get('[data-test=dropdown-novid]').click();
        // cy.get('.c-product-feed-filters__content-body > .is-open > div > :nth-child(1)').click();


    })

    it('Yeyezados', () => {
        cy.viewport (1200,1080);

        
        Yeyezar.selecionar_produto();
        Yeyezar.login();
        Yeyezar.verificar();

        // cy.visit('https://www.enjoei.com.br/');
        // // Selecionar produto para Yezar
        // cy.get('[data-test=button-fechar-modal] > .o-icon > use').click();
        // cy.get('[data-test=input-filtro-pesquisa]').type('tenis{enter}')
        // cy.get(':nth-child(4) > .c-product-card').click();
        // cy.get('[data-test=button-yeye]').click();
        // cy.get('[data-test=button-entrar-email]').click();
        // // Login para Yezar
        // cy.get('[data-test=input-email]').type('iasminvictoria@hotmail.com');
        // cy.get('[data-test=input-password]').type('iasmin0411{enter}');
        // cy.get('[data-test=button-yeye] > .o-icon').click();
        // // Verificar Yezados
        // cy.get('[data-test=button-bar-avatar] > .o-avatar').click();
        // cy.get('[data-test=button-menu-yeyezados]').click();
        // cy.get('.c-toggle__area').click();

    
    })
})