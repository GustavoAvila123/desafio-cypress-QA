import Usuario from "../../../fixtures/usuario";
import Metodos from "../pagina_acao/metodos"
import elementosHome from "../pagina_elementos/elementos_Home"
import elementosMinhaConta from "../pagina_elementos/elementos_MinhaConta";

//#region VARIÁVEIS
const TituloMinhaConta = 'Minha conta';
const TituloLogin = 'Login';
const TituloUserNameOrEmail = 'Username or email address';
const TituloPassword = 'Password';
const MensagemDeErroSenha = 'Erro: A senha fornecida para o e-mail gustavotoiansk@icloud.com está incorreta. Perdeu a senha?';
const MensagemDeErroEmail = 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.';
const MensagemDeErroUsuarioObrigatorio = 'Erro: Nome de usuário é obrigatório.';
const MensagemDeErroSenhaObrigatorio = 'Erro: O campo da senha está vazio.';
//#endregion

describe('LOGIN', () => {

  beforeEach(() => {
    cy.aberturaDeSite()
    Metodos.clicar(elementosHome.botaoEfetuarLogin)
    Metodos.validarTexto(elementosMinhaConta.tituloMinhaConta, TituloMinhaConta)
    Metodos.validarTexto(elementosMinhaConta.tituloLogin, TituloLogin)
  })

  it('1.1 - Logando na conta com sucesso', () => {
    Metodos.validarTexto(elementosMinhaConta.tituloUserNameOrEmail, TituloUserNameOrEmail)
    Metodos.escrever(elementosMinhaConta.escreverUserNameOrEmail, Usuario.email)
    Metodos.validarTexto(elementosMinhaConta.tituloPassword, TituloPassword)
    Metodos.escrever(elementosMinhaConta.escreverPassword, Usuario.senha_correta)
    Metodos.clicar(elementosMinhaConta.botaoLogar)
    Metodos.validarTexto(elementosMinhaConta.tituloWelcome, Usuario.welcome)
    Metodos.validarTexto(elementosMinhaConta.tituloOlaUsuario, Usuario.usuario)
  })

  it('1.2 - Logando na conta com senha inválida', () => {
    Metodos.validarTexto(elementosMinhaConta.tituloUserNameOrEmail, TituloUserNameOrEmail)
    Metodos.escrever(elementosMinhaConta.escreverUserNameOrEmail, Usuario.email)
    Metodos.validarTexto(elementosMinhaConta.tituloPassword, TituloPassword)
    Metodos.escrever(elementosMinhaConta.escreverPassword, Usuario.senha_incorreta)
    Metodos.clicar(elementosMinhaConta.botaoLogar)
    Metodos.validarTexto(elementosMinhaConta.mensagemDeErro, MensagemDeErroSenha)
  })

  it('1.3 - Logando na conta com email inválido', () => {
    Metodos.validarTexto(elementosMinhaConta.tituloUserNameOrEmail, TituloUserNameOrEmail)
    Metodos.escrever(elementosMinhaConta.escreverUserNameOrEmail, Usuario.email_incorreto)
    Metodos.validarTexto(elementosMinhaConta.tituloPassword, TituloPassword)
    Metodos.escrever(elementosMinhaConta.escreverPassword, Usuario.senha_correta)
    Metodos.clicar(elementosMinhaConta.botaoLogar)
    Metodos.validarTexto(elementosMinhaConta.mensagemDeErro, MensagemDeErroEmail)
  })

  it('1.4 - Validando campo USERNAME OR EMAIL ADDRESS obrigatório', () => {
    Metodos.clicar(elementosMinhaConta.botaoLogar)
    Metodos.validarTexto(elementosMinhaConta.mensagemDeErro, MensagemDeErroUsuarioObrigatorio)
  })

  it('1.5 - Validando campo PASSWORD obrigatório', () => {
    Metodos.escrever(elementosMinhaConta.escreverUserNameOrEmail, Usuario.email)
    Metodos.clicar(elementosMinhaConta.botaoLogar)
    Metodos.validarTexto(elementosMinhaConta.mensagemDeErro, MensagemDeErroSenhaObrigatorio)
  })

})