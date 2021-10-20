const el = require('./elements').ELEMENTS
class Buscar {

busca_livro(){
    cy.visit(el.url);
    cy.get(el.popup).click();
    cy.get(el.search).type('livro{enter}');
}
etc_tal(){
    cy.get(el.filtro_etc_tal).click();
 }
 categoria(){
    cy.get(el.filtro_categoria).click();
    cy.get(el.filtro_outros).click();
}

preco(){
    cy.get(el.filtro_preco).click();
    cy.get(el.preco1).type('30');
    cy.get(el.preco2).type('70');
    cy.get(el.aplicar_filtro_preco).click();

}
ultimas_24h(){
    cy.get(el.filtro_novidades).click();
    cy.get(el.ultimas24h).click();
}
}


export default new Buscar ();
