// USE POR SUA CONTA E RISCO
// Dependencias: [axios]
// Você vai precisar obter algumas informações da sua sessão logada do twitter
// Use o script na página: https://twitter.com/seuusuario/with_replies 
// Não recomendo o uso abusivo em um curto periodo de tempo, isso pode ocasionar em penalidades pelo Twitter

// USE AT YOUR OWN RISK
// Dependencies: [axios]
// It needs you to get some informations from your twitter loggedin session
// Use script at this route: https://twitter.com/yourusername/with_replies 
// DO NOT USE REPEATEDLY IN A SHORT TIME. YOU MAY HAVE YOUR ACCOUNT SUSPENDED

// Você pode obter essa informação em algumas requisições. Procure por /UserTweetsAndReplies no DevTools/Network
// You can get it on header of some requests. look for /UserTweetsAndReplies in DevTools/Network 
const authorization = ``; 

// Você pode obter essa informação na url da requisição para rota /DeleteTweet. Delete um tweet manualmente e verifique no DevTool/Network
// You can get it on request url of /DeleteTweet route. Delete a tweet manually and check your DevTools/Network
// https://twitter.com/i/api/graphql/-->${queryId}<--/DeleteTweet
const deleteTweetQueryId = ''; 

// Você pode obter essa informação na url da requisição para rota /UserTweetsAndReplies. verifique no DevTool/Network
// You can get it on request url of /UserTweetsAndReplies route. check your DevTools/Network
// https://twitter.com/i/api/graphql/${getTweetsQueryId}/UserTweetsAndReplies?
const getTweetsQueryId = ''; 

// As informações prenchidas acima tem uma longa validade, então, não é necessário preenchelas a cada execução.
// Só atualize quando passar a obter qualquer erro 
// The above information are valid for long times, so, there no reason for changes every use.
// Just update if script is getting any error

var axios = axios || null;

(async (axios, cookie) => {
  if (!axios) throw Error('Axios não foi injetado, por favor rode o script de injeção do axios');

  const _cookies = {};
  cookie.split(';').forEach(_ => {
    if (_.indexOf('=') > -1) {
      const k = _.split('=')[0]?.trim();
      const v = _.split('=')[1]?.trim();
      _cookies[k] = v;
    }
  });

  const csrftoken = _cookies.ct0;

  const headers = {
    'accept': '*/*',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'pragma': 'no-cache',
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-twitter-active-user': 'yes',
    'x-twitter-auth-type': 'OAuth2Session',
    'x-twitter-client-language': 'en',
    'authorization': authorization,
    'x-csrf-token': csrftoken,
    'cookie': cookie,
  };

  const baseUrl = 'https://twitter.com/i/api/graphql';
  const _api = axios.create({ baseURL: baseUrl, headers: headers });

  const urlGetParams = {
    userId: _cookies.twid.replace('u%3D', ''),
    count: 20,
    withTweetQuoteCount: true,
    includePromotedContent: true,
    withCommunity: true,
    withSuperFollowsUserFields: true,
    withUserResults: true,
    withBirdwatchPivots: false,
    withReactionsMetadata: false,
    withReactionsPerspective: false,
    withSuperFollowsTweetFields: true,
    withVoice: true,
  };

  const urlGet = `https://twitter.com/i/api/graphql/${getTweetsQueryId}/UserTweetsAndReplies?variables=${encodeURIComponent(JSON.stringify(urlGetParams))}`;

  const urlDelete = `https://twitter.com/i/api/graphql/${deleteTweetQueryId}/DeleteTweet`;

  async function esperar(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
  }

  async function obterTweets() {
    console.log('obtendo tweets!');
    const tweetsResultado = await _api.get(urlGet);
    const { data } = tweetsResultado.data;
    const tweets = Array.from(data.user.result.timeline.timeline.instructions)
      .map(_ => _.entries)
      .flat();
    return tweets;
  }

  async function deletarTweet(id) {
    const dadosPost = JSON.stringify({
      variables: JSON.stringify({ tweet_id: `${id}`, dark_request: false }),
      queryId: queryId,
    });
    const resultado = await _api.post(urlDelete, dadosPost);
    console.log('Tweet deletado!', resultado);
  }

  function obterIdTweet(tweet) {
    return tweet.sortIndex;
  }

  const tweets = await obterTweets();
  console.log('tweets', tweets);
  for (const tweet of tweets) {
    const id = obterIdTweet(tweet);
    console.log('deletando tweet: ', id);
    await deletarTweet(id);
    await esperar(7);
  }
  alert('Os tweets carregados foram deletados, rode novamente o script para obter mais tweets');
})(axios, document.cookie);
