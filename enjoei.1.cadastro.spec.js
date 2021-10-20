///<reference types="cypress"/>
import Cadastro from '../support/pages.enjoei/1.cadastro'
describe ('Cadastro', () => {
   
    beforeEach(() =>{
        Cadastro.acessarSite();
        Cadastro.novaConta();
    })

    it ('Criar conta com e-mail inválido', () => {
        Cadastro.criaçãoEmailInválido();
        Cadastro.validarEtapadeCadastro();
    })

    it ('Testar CheckBox 1', () => {
        Cadastro.testarCB1();
    })

    it ('Testar CheckBox 2', () => {
        Cadastro.testarCB2();
        Cadastro.validarEtapadeCadastro();
    })

    it ('Criar conta com CEP inválido e e-mail válido', () => {
        Cadastro.cadastroCEPXemailok();
        Cadastro.validarEtapadeCadastro();
    })
    
    it ('Criar conta com e-mail e CEP válidos', () => {
        Cadastro.cadastroCEPokEmailok();
        Cadastro.validarEtapadeCadastro();
    })

    
})