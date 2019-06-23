const textLabelsEn = {
  index: {
    subtitle: "Welcome!",
    body: {
      first:
        "I'm Rodrigo Vieira. A passionate developer, I love to build things, though sometimes not very useful things. From Aracaju, Brazil, currently at Montreal, Canada.",
      second:
        "In love with traveling, foodie, calisthenics, and everything else that this world has to offer.",
      third: "What do I do?",
      fourth:
        "At this moment, I'm at Interlaken's dev team, one of the biggest suppliers of systems for gyms in South America.",
      fifth: "Technologies I love to work with:",
    },
  },

  contact: {
    title: "Say hello to me!",
    subtitle:
      "If you wish to talk with me, I'd love to be delighted with your message.",
    paragraph: "Shoot me at ",
  },

  portfolio: {
    title: "I am Rodrigo.",
    subtitle:
      "Bellow you can find a small piece of what I already did.",
  },

  page404: {
    title: "Not found",
    subtitle: "Ergh.... There's nothing here.",
  },

  footer: {
    text:
      "Website built with the Gatsby framework. The source code is available in my Github.",
  },

  header: {
    homepage: "Home",
    portfolio: "Portfolio",
    contact: "Contact",
  },
}

const textLabelsPt = {
  index: {
    subtitle: "Bem-vindo!",
    body: {
      first:
        "Eu me chamo Rodrigo Vieira. Sou um programador apaixonado, adoro construir coisas, nem sempre tão úteis. De Aracaju, agora estou em Montreal, Canadá.",
      second:
        "Apaixonado por viagens, por comida(s), calistenia e tudo que esse mundo tem a oferecer.",
      third: "O que eu faço?",
      fourth:
        "Agora, estou no time de desenvolvimento da Interlaken, uma das maiores fornecedoras de sistemas de academia da América Latina.",
      fifth: "Tecnologias que eu amo trabalhar:",
    },
  },

  contact: {
    title: "Diga oi para mim!",
    subtitle:
      "Caso deseje falar comigo, será o meu maior prazer ser digno da sua mensagem.",
    paragraph: "Meu e-mail é: ",
  },

  portfolio: {
    title: "Eu sou Rodrigo.",
    subtitle:
      "Abaixo você pode encontrar um pequeno pedaço das coisas que já fiz.",
  },

  page404: {
    title: "Não encontrado",
    subtitle: "Então... não há nada aqui.",
  },

  footer: {
    text:
      "Construído com o framework Gatsby. O código-fonte está disponível em meu Github.",
  },

  header: {
    homepage: "Início",
    portfolio: "Portfólio",
    contact: "Contato",
  },
}

const getLanguageObject = lang => {
  if (lang === "en") return textLabelsEn
  else if (lang === "pt") return textLabelsPt

  return textLabelsPt
}

export default getLanguageObject
