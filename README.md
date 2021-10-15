# twitter-tweet-cleaner
Esse script foi criado para deletar todos os tweets feitos por você na página a qual for injetado.
Eu executei por diversos dias, com um volume controlado de exclusões diárias para evitar qualque penalidade do Twitter.
**Use por sua conta e risco** eu não me responsabilizo por quaisquer sanções, suspensão ou penalidade que o twitter possa aplicar a sua conta.
Não me responsabilizo pela perda de qualquer informação ou tweet e nem por ações equivocadas do script. A execução deve ser supervisionada. 
Você é livre para alterar qualquer coisa do script.

## Motivações
Estava com uma conta cheia de tweets velhos os quais foram feitos por um de meus robôs.
Precisava limpar a conta pois estava me incomodando aquela quantidade de tweets. Então decidi criar esse script.
Usei jQuery por praticidade.

## Como usar?
1. Abra seu perfil do twitter em qualquer browser (https://twitter.com/seuusuario/with_replies)
2. Com a pagina aberta, abra o `DEVTools` (Geralmente F12)
3. Injete o `jQuery` na página (mais instruções sobre injeção de scripts serão adicionadas futuramente)
4. `jQuery` que injete: https://code.jquery.com/jquery-3.6.0.min.js
5. (Opcional) Você pode criar um Snippet no browser para injetar qualquer script quando quiser (https://developer.chrome.com/docs/devtools/javascript/snippets/#open)
6. Certifiquesse de que o `jQuery` foi injetado com sucesso. Para isso vá na aba console do `DEVTools` e execute `jQuery('body')` deve retornar um objeto.
7. Estando com o os passos acima em ordem, copie o código do arquivo `script.js` desse repositorio
8. Cole no console e antes de executar, coloque o seu nome de usuário do twitter na variável `**userName**`
9. Execute o comando
10. Assista seus tweets sendo deletados

# ⚠ Importante ⚠
- Não me responsabilizo pela execução do script **Use por sua conta e risco**
- Se você não entendeu NADA dos passos acima ou tem dúvidas, você pode: Ignorar toda essa solução e continuar a fazer o que você estava fazendo, entrar em contato comigo ou estudar sobre o assunto e tentar enteder.
- Não é recomendado para pessoas que não entenderam o que está acontecendo nesse script, rs 
- Não feche a aba/guia página
- Não mude de pagina na aba/guia que está executando o script
- Supervisione a exclusão dos tweets ou seja, role o scroll da página para carregar mais tweets e certifiquesse de que está acontecendo corretamente.
- **Não** tente excluir todos os tweets no mesmo dia ou isso pode acarretar em penalidades na sua conta. Faça aos poucos, no decorrer de alguns dias!
- Não clique em nenhum link enquanto o script executa, pois pode estragar a execução
- Essa não é uma solução oficial para o problema, foi a forma mais criativa e de melhor custo-benefício para mim
- Eu criei para excluir TODOS os meus tweets, não existe filtro
