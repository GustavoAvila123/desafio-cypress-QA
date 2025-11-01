import Usuario from "../../../fixtures/usuario";
import Metodos from "../pagina_acao/metodos"
import elementosCarrinho from "../pagina_elementos/elementos_Carrinho";
import elementosHome from "../pagina_elementos/elementos_Home"
import elementosMinhaConta from "../pagina_elementos/elementos_MinhaConta";
import elementosProdutos from "../pagina_elementos/elementos_Produtos";

//#region VARIÁVEIS
const TituloProdutosSugeridos = 'Produtos sugeridos';
const Quantidade1 = '1';
const Quantidade0 = '0';
const TituloImage = 'Image';
const TituloProduct = 'Product';
const TituloPrice = 'Price';
const TituloQuantity = 'Quantity';
const TituloTotal = 'Total';
const TituloRemove = 'Remove';
const SeuCarrinhoEstaVazio = 'Seu carrinho está vazio.';
const ProdutoRemovidoDesfazer = '“Ingrid Running Jacket” removido. Desfazer?';
//#endregion

describe('MINI CART', () => {

    beforeEach(() => {
        cy.aberturaDeSite()
        Metodos.clicar(elementosHome.botaoEfetuarLogin)
        Metodos.escrever(elementosMinhaConta.escreverUserNameOrEmail, Usuario.email)
        Metodos.escrever(elementosMinhaConta.escreverPassword, Usuario.senha_correta)
        Metodos.clicar(elementosMinhaConta.botaoLogar)
        Metodos.validarTexto(elementosMinhaConta.tituloWelcome, Usuario.welcome)
        cy.wait(500)
    })

    it('3.1 - Adicionando um produto ao Mini Cart', () => {
        Metodos.clicar(elementosMinhaConta.botaoHome)
        Metodos.validarTexto(elementosHome.tituloProdutosSugeridos, TituloProdutosSugeridos)
        Metodos.clicarPrimeiraOpcao(elementosHome.produtoIngridRunningJacket)
        Metodos.clicar(elementosProdutos.sizeXL)
        Metodos.clicar(elementosProdutos.colorOrange)
        Metodos.clicar(elementosProdutos.botaoComprar)
        Metodos.validarTexto(elementosProdutos.botaoShoppingCart, Quantidade1)
        Metodos.clicar(elementosProdutos.botaoVerCarrinho)
        Metodos.validarTexto(elementosCarrinho.tituloImage, TituloImage)
        Metodos.validarTexto(elementosCarrinho.tituloProduct, TituloProduct)
        Metodos.validarTexto(elementosCarrinho.tituloPrice, TituloPrice)
        Metodos.validarTexto(elementosCarrinho.tituloQuantity, TituloQuantity)
        Metodos.validarTexto(elementosCarrinho.tituloTotal, TituloTotal)
        Metodos.validarTexto(elementosCarrinho.tituloRemove, TituloRemove)
    })

    it('3.2 - Removendo um produto adicionado ao Mini Cart pelo botão REMOVE', () => {
        Metodos.clicar(elementosMinhaConta.botaoHome)
        Metodos.validarTexto(elementosHome.tituloProdutosSugeridos, TituloProdutosSugeridos)
        Metodos.clicarPrimeiraOpcao(elementosHome.produtoIngridRunningJacket)
        Metodos.clicar(elementosProdutos.sizeXL)
        Metodos.clicar(elementosProdutos.colorOrange)
        Metodos.clicar(elementosProdutos.botaoComprar)
        Metodos.clicar(elementosProdutos.botaoVerCarrinho)
        Metodos.clicar(elementosCarrinho.botaoRemove)
        Metodos.validarTexto(elementosCarrinho.mensagemProdutoRemovido, ProdutoRemovidoDesfazer)
        Metodos.validarTexto(elementosCarrinho.mensagemCarrinhoVazio, SeuCarrinhoEstaVazio)
    })

    it('3.3 - Removendo um produto adicionado ao Mini Cart pelo botão "X"', () => {
        Metodos.clicar(elementosMinhaConta.botaoHome)
        Metodos.validarTexto(elementosHome.tituloProdutosSugeridos, TituloProdutosSugeridos)
        Metodos.clicarPrimeiraOpcao(elementosHome.produtoIngridRunningJacket)
        Metodos.clicar(elementosProdutos.sizeXL)
        Metodos.clicar(elementosProdutos.colorOrange)
        Metodos.clicar(elementosProdutos.botaoComprar)
        Metodos.clicar(elementosProdutos.botaoMiniCart)  
        Metodos.clicarPrimeiraOpcao(elementosProdutos.botaoXMiniCart) 
        Metodos.validarTexto(elementosProdutos.botaoShoppingCart, Quantidade0)
    })

})