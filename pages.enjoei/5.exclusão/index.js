import { ELEMENTS } from '../5.exclusão/elements';

const el = require ('../5.exclusão/elements').ELEMENTS

class Exclusão {
    acessarSite(){
        cy.visit(el.site);
    }
    fecharpopupInicial(){
        cy.get(el.fecharpop01).click();
    }
    pesquisarLivros(){
        cy.get(el.pesquisarProd).type('Livros {enter}');
    }
    selecionarProduto(){
        cy.get(el.selecionarProd).click();
    }
    adicionaraSacolinha(){
        cy.get(el.addSacolinha).click();
    }
    fazerLogin(){
        cy.get(el.emailLogin).type('rwan_muniz@hotmail.com');
        cy.get(el.senhaLogin).type('123456789');
        cy.get(el.botãoentrar).click();
    }
    acessarAvatar(){
        cy.get(el.avatar).click();
    }
    acessarConfigurações(){
        cy.get(el.configurações).click();  
    }
    deletarConta(){
        cy.get(el.botãoExcluirconta).click();
        cy.get(el.senhaExcluirconta).type('123456789');
        cy.get(el.excluirMinhaconta).click();
    }
}

export default new Exclusão ();
