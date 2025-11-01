export const elementosMinhaConta = {

    //#region TÍTULOS
    tituloMinhaConta: ('.page-title'),
    tituloLogin: (':nth-child(1) > h2'),
    tituloUserNameOrEmail: ('.woocommerce-form > :nth-child(1) > label'),
    tituloPassword: ('.woocommerce-form > :nth-child(2) > label'),
    tituloWelcome: ('a > .hidden-xs'),
    tituloOlaUsuario: ('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)'),
    tituloRegister: (':nth-child(2) > h2'),
    //#endregion

    //#region ESCREVER
    escreverUserNameOrEmail: ('[name="username"]'),
    escreverPassword: ('.woocommerce-form > :nth-child(2) > [name="password"]'),
    //#endregion

    //#region BOTÕES
    botaoLogar: ('[name="login"]'),
    botaoLogout: ('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a'),
    botaoSairNaoEVoce: ('.woocommerce-MyAccount-content > :nth-child(2) > a'),
    botaoSair: ('.woocommerce-MyAccount-navigation-link--customer-logout > a'),
    botaoHome: ('.breadcrumb > :nth-child(1) > a'),
    //#endregion

    //#region MENSAGEM
    mensagemDeErro: ('.woocommerce-error > li')
    //#endregion

}
export default elementosMinhaConta;