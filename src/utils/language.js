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
    subtitle: "Bellow you can find a small piece of what I already did.",
    details: "Detalhes",
    technologies: "Technologies",
    projects: {
      bestclean: {
        summary: "BestClean - complete cross-platform application.",
        description:
          "Application for an industrial laundry made to assist in all tasks related to the company's organization. \n Clients can track their packages and see in which exact stage their package is, and the staff can also easily manage internally all the active orders, reducing to almost 0 the use of paper.",
      },
    },
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
    details: "Detalhes",
    technologies: "Tecnologias",
    projects: {
      bestclean: {
        summary: "BestClean - aplicação multi-plataforma completa.",
        description:
          "Aplicativo feito para uma lavanderia industrial que facilita no gerenciamento interno da companhia, possibilitando que clientes possam verificar a situação do seu pedido e em que estado ele se encontra, além de permitir que a equipe possa gerenciar pedidos internamente, reduzindo a quase 0 o uso de papéis.",
      },
    },
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
