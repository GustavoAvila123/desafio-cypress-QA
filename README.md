<h1 align="center">
    <img src="https://www.projectbuilder.com.br/wp-content/uploads/2022/06/blogpostimagem.png" alt="EBAC-SHOP" height="100" width="200">
    <br>
</h1>

<div style="display: flex; justify-content: center;">
<a href="https://github.com/GustavoAvila123/desafio-cypress-QA.git"><img src="https://img.shields.io/badge/-GITHUB-0b6baa?style=for-the-badge&logo=github&logoColor=white" width="100" height="22" style="margin-right: 5px;"/></a>
<a href="http://lojaebac.ebaconline.art.br/"><img src="https://img.shields.io/badge/-Website-963d8f?style=for-the-badge&logo=internet-explorer&logoColor=White" width="100" height="22" style="margin-right: 5px;"/></a>
</div>

---

<h4 align="center" style="color: white; font-size: 20px;">
    🚧 AUTOMAÇÃO DE TESTES | FRONT-END 🚧
</h4>

---

## <font color="white">💻 SOBRE O PROJETO</font>

<p style="color: white;">O projeto é um conjunto abrangente de testes automatizados para <strong>garantir a funcionalidade e a integridade do site EBAC-SHOP.</strong><br>

Ele aborda uma variedade de cenários, desde a navegação básica até interações específicas do usuário.<br>

<strong>A estrutura dos testes reflete uma abordagem meticulosa</strong> para cobrir todos os aspectos do site, visando garantir uma funcionalidade consistente e livre de erros.<br>

A EBAC-SHOP tem como meta, sempre garantir uma experiência <strong>ÚNICA</strong> em sua navegação, buscando incansavelmente a excelência.</p>

---

## <font color="white">🛠️ TECNOLOGIAS UTILIZADAS</font>

<font color="white">O projeto foi desenvolvido utilizando as seguintes tecnologias:</font>

- [<span style="color: #0b6baa;">Cypress</span>](https://www.cypress.io/)
- [<span style="color: #0b6baa;">VS Code</span>](https://code.visualstudio.com/)

<font color="white">Além disso, temos a seguinte dependência:</font>

- [<span style="color: #0b6baa;">Allure Report</span>](https://www.allurereport.org/docs/cypress/)

---

## <font color="white">📂 COMO BAIXAR O PROJETO</font>

<pre>
<code class="language-bash">
<span style="color: #963d8f;"># Clonar o repositório</span>
$ https://github.com/GustavoAvila123/desafio-cypress-QA.git

<span style="color: #963d8f;"># Instalar o Cypress</span>
$ npm install cypress --save-dev

<span style="color: #963d8f;"># Instalar o Allure Report</span>
$ npm install -D allure-cypress allure-commandline

</code>
</pre>

---

## <font color="white">🚀 COMO EXECUTAR O PROJETO</font>

<pre>
<code class="language-bash">
<span style="color: #963d8f;"># Execução Via Front</span>
$ npx cypress open

<span style="color: #963d8f;"># Execução Via Linha de Comando</span>
$ npx cypress run

<span style="color: #963d8f;"># Execução Via Linha de Comando com Relatório Gerencial</span>
$ rm -rf allure-report && npx cypress run && npx allure generate allure-results --clean -o allure-report && npx allure open allure-report

</code>
</pre>

## <font color="white">📝 RESUMO DA ESTRUTURA</font>

<p style="color: #FFFFFF;">
    🔧 CYPRESS:<br>
    <font color="#0b6baa">&#10004;</font> pagina_acao: Armazena os metódos do projeto.</br>
    <font color="#0b6baa">&#10004;</font> pagina_elementos: Armazena os locators do projeto.</br>
    <font color="#0b6baa">&#10004;</font> pagina_execucao: Armazena as execuções dos cenários de testes.</br>
    <font color="#0b6baa">&#10004;</font> commands: Armazena o código em formato de comando.</br>
</p>

<p style="color: #FFFFFF;">
    🎬 PÁGINA AÇÃO:<br>
    <font color="#0b6baa">&#10004;</font> Consolida todos os metódos usados no projeto, como por exemplo: Clicar, escrever, validar, etc.<br>
</p>

<p style="color: #FFFFFF;">
    ⚙️ PÁGINA ELEMENTOS:<br>
    <font color="#0b6baa">&#10004;</font> Consolida os locators, ajduando a manter o código mais limpo e evitando duplicidades.<br>
</p>

<p style="color: #FFFFFF;">
    ⏯️ PÁGINA EXECUÇÃO:<br>
    <font color="#0b6baa">&#10004;</font> Orquestra e sintetiza a execução da automação, separados por cenários.<br>
</p>

## <font color="white">🔍 OVERVIEW DOS TESTES</font>
<p style="color: #FFFFFF;">
    <strong style="color: #0b6baa;">QUANTIDADE DE TESTES (11)</strong><br>

<p style="color: #FFFFFF;">
    <strong style="color: #963d8f;">LOGIN:</strong><br>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>1.1</strong> Este teste valida o fluxo principal de autenticação, garantindo que o usuário consiga acessar sua conta com credenciais corretas. Ele verifica os campos de login, preenche o e-mail e a senha válidos, clica no botão de acesso e confirma se as mensagens de boas-vindas e identificação do usuário são exibidas corretamente, assegurando que o sistema de login está funcional e permitindo o uso das áreas restritas do site.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>1.2</strong> Este teste verifica se o sistema impede o acesso quando uma senha incorreta é informada, mesmo que o e-mail seja válido. Após preencher os campos e tentar o login, o teste valida a exibição da mensagem de erro adequada, confirmando que o sistema realiza a validação correta das credenciais e mantém a segurança do processo de autenticação.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>1.3</strong> Este teste assegura que o sistema não permite o login quando um e-mail inexistente ou incorreto é inserido, mesmo com uma senha válida. Ele valida se a mensagem de erro correspondente é apresentada, garantindo que a verificação do e-mail é realizada corretamente e que o usuário recebe um feedback claro sobre o motivo da falha.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>1.4</strong> Este teste verifica o comportamento do sistema ao tentar efetuar o login sem preencher o campo de e-mail ou nome de usuário. Ele garante que o site exiba uma mensagem de erro informando a obrigatoriedade do campo, validando a existência das restrições de preenchimento e evitando o envio de formulários incompletos.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>1.5</strong> Este teste confirma que o campo de senha é obrigatório no formulário de login. Ao tentar acessar a conta sem preencher a senha, o sistema deve exibir a mensagem de erro correspondente, assegurando que a validação de obrigatoriedade está ativa e que o usuário não consiga prosseguir sem fornecer as credenciais completas.
    </p>
    <strong style="color: #963d8f;">LOGOUT:</strong><br>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>2.1</strong> Este teste valida que o usuário consegue encerrar a sessão corretamente ao clicar no botão de logout, garantindo que ele seja redirecionado para a página inicial e que os elementos da home, como o título “Produtos sugeridos”, sejam exibidos, confirmando que a sessão foi finalizada com sucesso.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>2.2</strong> Este teste verifica se o usuário pode sair da conta utilizando o botão alternativo “Sair – Não é você?”, garantindo que o sistema redirecione para a página de registro e que o título correspondente seja exibido, assegurando que o logout funciona corretamente em diferentes pontos de interação.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>2.3</strong> Este teste confirma que o logout também é funcional através do botão “Sair” simples, validando que o usuário é levado para a página de registro e que os elementos de interface esperados, como o título “Register”, aparecem corretamente, reforçando a consistência e confiabilidade do fluxo de saída da conta.
    </p>
    <strong style="color: #963d8f;">CART:</strong><br>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>3.1</strong> Este teste automatiza o fluxo de compra, garantindo que o usuário consiga adicionar um produto ao carrinho corretamente. Ele navega até a página inicial, valida o título “Produtos sugeridos”, seleciona o produto “Ingrid Running Jacket”, escolhe tamanho e cor, adiciona ao carrinho e verifica se o Mini Cart exibe a quantidade correta. Em seguida, acessa a página do carrinho e valida todos os elementos essenciais, como imagem, nome do produto, preço, quantidade, total e botão de remoção, assegurando que o processo de adição está funcional e a interface exibe todas as informações corretamente.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>3.2</strong> Este teste garante que um produto adicionado ao carrinho possa ser removido utilizando o botão “Remove”. Ele segue o mesmo fluxo de adição do produto, acessa o carrinho, clica no botão de remoção e valida se as mensagens de confirmação de remoção e de carrinho vazio são exibidas corretamente, confirmando que o usuário tem controle sobre o conteúdo do carrinho e que o feedback do sistema é adequado.
    </p>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>3.3</strong> Este teste valida a remoção de produtos diretamente pelo ícone “X” no Mini Cart, garantindo uma experiência rápida de exclusão. Ele adiciona o produto ao carrinho, abre o Mini Cart, clica no botão “X” do produto e verifica se a quantidade no carrinho volta a zero, confirmando que o Mini Cart é interativo, responde corretamente às ações do usuário e mantém a consistência dos dados exibidos.
    </p>

<h2 style="color: white;">✍ AUTOR</h2>

  <table>
  <tr>
    <td align="center">
      <a href="http://lojaebac.ebaconline.art.br/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/132934043?s=400&u=d70e99353630191829cdfbc95f9f48c0a66299e8&v=4" width="100px;" alt=""/>
        <br />
         <sub style="color: white;"><b>Gustavo Ávila</b></sub>
      </a>
      <br />
      <a title="ANALISTA DE QUALIDADE"><sub style="color: white;"><b>Analista de Qualidade<b></a>
      <br/>
      <br/>
      <a href="mailto:gustavotoiansk@icloud.com">
        <img src="https://img.shields.io/badge/-gustavotoiansk@icloud.com-0b6baa?style=flat-square&logo=Gmail&logoColor=white" alt=""/>
      </a>
      <td align="center">
    </td>
  </tr>
</table>