import Usuario from "../../../fixtures/usuario";
import Metodos from "../pagina_acao/metodos"
import elementosHome from "../pagina_elementos/elementos_Home"
import elementosMinhaConta from "../pagina_elementos/elementos_MinhaConta";

//#region VARIÁVEIS
const TituloProdutosSugeridos = 'Produtos sugeridos';
const TituloRegister = 'Register';
//#endregion

describe('LOGOUT', () => {

    beforeEach(() => {
        cy.aberturaDeSite()
        Metodos.clicar(elementosHome.botaoEfetuarLogin)
        Metodos.escrever(elementosMinhaConta.escreverUserNameOrEmail, Usuario.email)
        Metodos.escrever(elementosMinhaConta.escreverPassword, Usuario.senha_correta)
        Metodos.clicar(elementosMinhaConta.botaoLogar)
        Metodos.validarTexto(elementosMinhaConta.tituloWelcome, Usuario.welcome)
        cy.wait(500)
    })

    it('2.1 - Deslogando da conta com sucesso botão LOGOUT', () => {
        Metodos.clicar(elementosMinhaConta.botaoLogout)
        Metodos.validarTexto(elementosHome.tituloProdutosSugeridos, TituloProdutosSugeridos)
    })

    it('2.2 - Deslogando da conta com sucesso botão SAIR - NÃO É VOCÊ?', () => {
        Metodos.clicar(elementosMinhaConta.botaoSairNaoEVoce)
        Metodos.validarTexto(elementosMinhaConta.tituloRegister, TituloRegister)
    })

    it('2.3 - Deslogando da conta com sucesso botão SAIR', () => {
        Metodos.clicar(elementosMinhaConta.botaoSair)
        Metodos.validarTexto(elementosMinhaConta.tituloRegister, TituloRegister)
    })

})