import React from 'react';
import pricingImg from '../../assets/images/index';

export default function StarterSection() {
  return (
    <section id="getting-started" className="tutorial-section">
      <div className="before-start-container">
        <h2 className="heading">Antes de Começar</h2>
        <p className="content">
          Dall-E 2 é uma Inteligência Artificial que gera imagens a partir de uma
          descrição textual. Essa IA desenvolvida pela
          {' '}
          <i>OpenAI</i>
          , para que possa ser
          utilizada, pressupõe um cadastro que pode ser feito gratuitamente em seu
          {' '}
          <a
            href="https://auth0.openai.com/u/signup/identifier?state=hKFo2SAyNG1JLTAtVW82TTdEd0xtVlRPLUpGR2wwbDRSZGZvMqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIF9aT1NsdzhPZzlFSE0xSVExU1BjZDJKenZoenlfOUFfo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"
            target="_blank"
            rel="noreferrer"
          >
            site
            oficial
          </a>
          . Já este site -
          {' '}
          <b>Dalle-2 JS</b>
          {' '}
          - que construí em Javascript, nada mais é do que um
          {' '}
          <i>Client</i>
          {' '}
          que consome a API da Dall-E 2 e a partir da biblioteca React.js, disponibiliza
          as imagens geradas pela API de uma forma prática e visualmente agradável.
        </p>
        <p className="content">
          Há muitas outras funcionalidades que a API da Dall-E 2 é capaz de realizar, no entanto
          esse site busca apenas implementar sua principal e mais famosa ferramenta,
          a geração de imagens baseada em descrição textual. Esse processo, até o momento,
          pode ser feito de forma gratuita. Para isso é preciso criar uma conta na plataforma
          da OpenAI. Assim você poderá gerar uma
          {' '}
          <b>API_KEY</b>
          , chave necessária para gerar suas imagens. É ela quem calcula a quantidade de imagens
          gerada por você, visto que há um custo por imagem produzida em proporção também à
          resolução. Veja a tabela de preços abaixo:
        </p>
        <img className="content-img" src={pricingImg} alt="" />
        <p className="content">
          No entanto, ao cadastrar sua conta, você recebe gratuitamente
          {' '}
          <b>$18</b>
          {' '}
          para gerar imagens,
          {' '}
          <b>que se encerram ao final de três meses após seu cadastro</b>
          {' '}
          , ou até que você realize requisições suficientes para consumir este saldo.
          Tanto para obter o saldo inicial como o registro da conta, não é necessário
          cadastrar nenhum cartão ou dado bancário. Todo custo é calculado baseado na
          API_KEY fornecida, que é uma chave e que nesta aplicação ficará salva apenas
          no seu navegador,
          {' '}
          <b>sem que mais ninguém tenha acesso à ela e consuma seus créditos</b>
          . Por isso, experimente! Siga os passos abaixo, registre uma conta gratuitamente e
          gere suas imagens até que seu saldo se esgote. Caso goste da ferramenta,
          adicione um cartão no site oficial da OpenAI e poderá continuar utilizando esse site
          para realizar suas requisições na API Dall-E 2!
        </p>
      </div>
      <hr />
      <div />
    </section>
  );
}
