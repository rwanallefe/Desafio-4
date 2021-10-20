const el = require('./elements').ELEMENTS
class yeyezados{

selecionar_produto(){
    cy.visit(el.url);
    cy.get(el.popup).click();
    cy.get(el.search).type('tenis{enter}');
    cy.get(el.tenis).click();
    cy.get(el.yeyezar).click();
}
login(){
    cy.get(el.login_email).click();
    cy.get(el.email).type('iasminvictoria@hotmail.com');
    cy.get(el.senha).type('iasmin0411{enter}');
    cy.get(el.botao_login).click();
 }
 verificar(){
    cy.get(el.avatar).click();
    cy.get(el.yeyezados).click();
    cy.get(el.validar_yeyezados).click();
}

}


export default new yeyezados();