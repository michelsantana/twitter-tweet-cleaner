# twitter-tweet-cleaner
Esse script foi criado para deletar todos os tweets feitos por você na página a qual for injetado.
Eu executei por diversos dias, com um volume controlado de exclusões diárias para evitar qualque penalidade do Twitter.
**Use por sua conta e risco** eu não me responsabilizo por quaisquer sanções, suspensão ou penalidade que o twitter possa aplicar a sua conta.

## Motivações
Estava com uma conta cheia de tweets velhos os quais foram feitos por um de meus robôs.
Precisava limpar a conta pois estava me incomodando aquela quantidade de tweets feitos por robô. Então decidi criar esse script
Usei jQuery por praticidade.

## Como usar?
1. Abra seu perfil do twitter em qualquer browser (https://twitter.com/seuusuario/with_replies)
2. Com a pagina aberta, abra o DEVTools 
3. Injete o jQuery na página (mais instruções sobre injetar jQuery serão adicionadas futuramente)
4. jQuery que injete: https://code.jquery.com/jquery-3.6.0.min.js
5. (Opcional) Você pode criar um Snippet no browser para injetar qualquer script quando quiser (https://developer.chrome.com/docs/devtools/javascript/snippets/#open)
6. Certifiquesse de que o jQuery foi injetado com sucesso. Para isso vá na aba console do DEVTools e execute jQuery('body') deve retornar um objeto.
7. Estando com o os passos acima em ordem, copie o código do arquivo script.js desse repositorio
8. Cole no console e antes de executar, coloque o seu nome de usuário do twitter na variável **userName**
9. Execute o comando
10. Assista seus tweets sendo deletados
