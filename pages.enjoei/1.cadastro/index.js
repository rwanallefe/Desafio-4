const el = require ('../1.cadastro/elements').ELEMENTS

class Cadastro {
    acessarSite(){
        cy.visit(el.site);
    }
    novaConta(){
        cy.get(el.novaConta).click();
    }
    criaçãoEmailInválido(){
        cy.get(el.nomeCadastro).type('Luna Barreto');
        cy.get(el.emailCadastro).type('oittascccdo@tchau.com');    
        cy.get(el.senhaCadastro).type('875812367');
        cy.get(el.cbFemininas).click();
        cy.get(el.receberNovidades).click();
        cy.get(el.termosePoliticas).click();        
        cy.get(el.criarConta).click(); 
    }
    validarEtapadeCadastro(){
        cy.get(el.preenchaseuCEP).should('contain', 'Preencha seu cep'); 
    }
    testarCB1(){
        cy.get(el.nomeCadastro).type('Luna Barreto');
        cy.get(el.emailCadastro).type('olammcdc@teste2.com');    
        cy.get(el.senhaCadastro).type('875812367');
        cy.get(el.cbFemininas).click();
        cy.get(el.receberNovidades).click();
        cy.get(el.criarConta).click();   
    }
    testarCB2(){
        cy.get(el.nomeCadastro).type('Luna Barreto');
        cy.get(el.emailCadastro).type('aacaa@tsteCB3.com');    
        cy.get(el.senhaCadastro).type('875812367');
        cy.get(el.cbFemininas).click();
        cy.get(el.termosePoliticas).click();        
        cy.get(el.criarConta).click();
    }
    cadastroCEPXemailok(){
        cy.get(el.nomeCadastro).type('Luna Barreto');
        cy.get(el.emailCadastro).type('cacia.padme@gmail.com');                           
        cy.get(el.senhaCadastro).type('875812367');
        cy.get(el.cbFemininas).click();
        cy.get(el.receberNovidades).click();
        cy.get(el.termosePoliticas).click();        
        cy.get(el.criarConta).click(); 
        cy.get(el.inserirCEP).type('00000000');
    }
    cadastroCEPokEmailok(){
        cy.get(el.nomeCadastro).type('Tayna Monteiro');
        cy.get(el.emailCadastro).type('nazia6936@gmail.com');                      
        cy.get(el.senhaCadastro).type('875812367');
        cy.get(el.cbFemininas).click();
        cy.get(el.receberNovidades).click();
        cy.get(el.termosePoliticas).click();        
        cy.get(el.criarConta).click(); 
        cy.get(el.inserirCEP).type('23895165');                                        
    }
}
export default new Cadastro ();