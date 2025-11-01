export class Metodos {

    //#region METODO ABERTURA DE SITE
    static aberturaDeSite() {
        cy.fixture('example.json').then((site) => {
            cy.visit(site.url, { failOnStatusCode: false });
        })
    }
    //#endregion

    //#region METODOS CLICAR
    static clicar(elemento) {
        cy.get(elemento, { timeout: 60000 }).wait(500).click({ force: true })
    }

    static clicarPrimeiraOpcao(elemento) {
        cy.get(elemento, { timeout: 60000 }).first().wait(500).click({ force: true })
    }
    //#endregion

    //#region METODO DE VALIDAÇÃO
    static validarTexto(elemento, titulo) {
        cy.get(elemento, { timeout: 30000 })
            .invoke('text').then((texto) => {
                cy.log(`**Texto encontrado:** "${texto.trim()}"`);
                cy.log(`**Texto esperado:** "${titulo}"`);
                expect(texto.includes(titulo),
                    `Esperado que o texto "${texto.trim()}" inclua "${titulo}"`
                ).to.be.true;
            });
    }
    //#endregion

    //#region METODO PARA ESCREVER
    static escrever(elemento, texto) {
        cy.get(elemento).type(texto, { force: true }).should('have.value', texto)
    }
    //#endregion

}
export default Metodos;