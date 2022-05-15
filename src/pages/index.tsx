import React from 'react'
import Head from 'next/head'

import * as S from 'styles/pages/Home'
import Card from 'components/Card'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Feliz aniversário</title>
      </Head>

      <S.Heading>Happy Birthday ma love</S.Heading>

      <S.Row justify="flex-start">
        <S.Text align="left">
          Hoje é um dia incrível. Há 16 anos atrás uma garotinha muito fofa
          fazia a sua estreia nesse mundo doido. Bom, e essa garota, mais
          conhecida como você! É uma pessoa excepcionalmente importante para
          mim.
        </S.Text>
      </S.Row>

      <Card img="/images/1.jpg" />

      <S.Row justify="flex-end">
        <S.Text align="right">
          E então, nada mais justo do que eu agradecer você por estar ao meu
          lado sempre e a parabenizar pelo fim e o começo de mais um ciclo na
          sua vida!
        </S.Text>
      </S.Row>

      <Card img="/images/2.jpg" />

      <S.Row justify="flex-start">
        <S.Text align="left">
          Eu gosto de relembrar os nossos momentos com fotos, elas mostram o
          quanto aproveitamos os nossos momentos juntos, ah e elas também
          mostram o quão feliz você me faz! Não só eu, mas todos que têm a
          oportunidade de estar ao seu lado.
        </S.Text>
      </S.Row>

      <Card img="/images/3.jpg" />

      <S.Row justify="center">
        <S.Text align="center">
          Amor a razão de tudo isso é para mostrar o quão importante você é!
          Essa mulher incrível, esplêndida, radiante, inteligente, afetuosa...
        </S.Text>
      </S.Row>

      <Card img="/images/4.jpg" />

      <S.Row justify="center">
        <S.Text align="center">Brilhante, bondosa, de coração enorme...</S.Text>
      </S.Row>

      <Card img="/images/5.jpg" />

      <S.Row justify="center">
        <S.Text align="center">
          Educada, corajosa, divertida, graciosa, minha maravilhosa...
        </S.Text>
      </S.Row>

      <Card img="/images/6.jpg" />

      <S.Row justify="flex-start">
        <S.Text align="left">
          Amor, eu espero que saiba que independente da situação eu vou estar ao
          seu lado sendo o seu maior fã, te apoiando, como parceiro, amigo,
          companheiro, namorado, esposo e sempre com muito orgulho, porque eu
          sou extremamente feliz com você, novamente, não só eu, mas todos que
          estão com você podem ser muito felizes.
        </S.Text>
      </S.Row>

      <Card img="/images/7.jpg" />

      <S.Row justify="flex-end">
        <S.Text align="right">
          Eu serei eternamente grato por você, meu bem!
        </S.Text>
      </S.Row>

      <Card img="/images/8.jpg" />
      <Card img="/images/9.jpg" />
      <Card img="/images/10.jpg" />
      <Card img="/images/11.jpg" />

      <S.Row justify="center">
        <S.Text align="center">26-11-2021</S.Text>
      </S.Row>

      <Card img="/images/12.jpg" />
      <Card img="/images/13.jpg" />
      <Card img="/images/14.jpg" />
      <Card img="/images/15.jpg" />
      <Card img="/images/16.jpg" />
      <Card img="/images/17.jpg" />
      <Card img="/images/18.jpg" />
      <Card img="/images/19.jpg" />
      <Card img="/images/20.jpg" />

      <S.Row justify="flex-start">
        <S.Text align="left">
          E eu espero mesmo que goste desse presente de coração feito com muito
          carinho rs
        </S.Text>
      </S.Row>

      <Card img="/images/21.jpg" />

      <S.Row justify="center">
        <S.Text align="center">Eu te amo muito meu amor!</S.Text>
      </S.Row>
    </S.Container>
  )
}

export default Home
