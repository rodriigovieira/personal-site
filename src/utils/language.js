const textLabelsEn = {
  index: {
    subtitle: "Welcome!",
    body: {
      first:
        "I'm Rodrigo Vieira. A passionate developer, I love to build things, though sometimes not very useful things. From and currently at Aracaju, Brazil.",
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
    details: "Details",
    technologies: "Technologies",
    website: "Access this project's website",
    more: "You can find more of my stuff at my ",
    projects: {
      bestclean: {
        description:
          "Application for an industrial laundry made to assist in all tasks related to the company's organization. \n Clients can track their packages and see in which exact stage their package is, and the staff can also easily manage internally all the active orders, reducing to almost 0 the use of paper.",
      },
      ulocal: {
        description: `Ulocal helps find restaurants offering local produce, microbreweries, artisans, vineyards or local designers and more.
        \n
        Ulocal is there for people who travel and want to quickly locate companies with local products wherever they are. Whether in unknown regions, in everyday life, as a tourist. Ulocal promotes local and ecological diversity.`
      },
      rewardMeNow: {
        description: "Reward Me Now offers employers the ability to give their staff incredible perks. You can reward your employees for their hard work and help their wages go further."
      },
      i4fit: {
        description: "i4fit was developed to end the traditional paper training sheet in the gym. It manages the workout of studends of dozens of gyms across Brazil. It integrtes the services provided by iFitness."
      },
      beerFinder: {
        description:
          "A program that makes uses of a public beer API, the Punk API, and displays the information in various ways. You can either see all beers, search a beer by its ID, or get a random one. Features a complete authentication system with login and signup.",
      },
      moviesFinder: {
        description:
          "A movies database where you can search all your favorite movies, and then, by clicking on a movie, you'll see all details of this particular movie, such as budget, trailers, dates, etc.",
      },
      expensesTracker: {
        description:
          "A simple expenses tracking application, which features a complete login system, with login, sign up and password recovery, and where you can log your expenses with just 2 clicks. The idea is: if you log every single expense of your day, you'll become much more aware of your daily expenses.",
      },
    },
  },

  page404: {
    title: "Not found",
    subtitle: "Ergh.... There's nothing here.",
  },

  footer: {
    text:
      "Website built with the Gatsby framework. The source code is available in my ",
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
        "Eu me chamo Rodrigo Vieira. Sou um programador apaixonado, adoro construir coisas, nem sempre tão úteis. Natural e residente de Aracaju.",
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
    website: "Acessar site desse projeto",
    more: "Você pode encontrar mais projetos em meu ",
    projects: {
      bestclean: {
        description:
          "Aplicativo feito para uma lavanderia industrial que facilita no gerenciamento interno da companhia, possibilitando que clientes possam verificar a situação do seu pedido e em que estado ele se encontra, além de permitir que a equipe possa gerenciar pedidos internamente, reduzindo a quase 0 o uso de papéis.",
      },
      ulocal: {
        description: `Ulocal oferece uma experiência turística e local diferenciada mostrando todas as empresas feitas com produtos locais ao seu redor. Atualmente mais de 4500 empresas de vários países já estão cadastradas.`
      },
      rewardMeNow: {
        description: "Reward Me Now é um aplicativo que permite você oferecer recompensas a funcionários de sua empresa. Centenae empresa do Reino Unido já estão cadastradas nesse aplicativo.."
      },
      i4fit: {
        description: "i4Fit foi desenvolvido para acabar com a ficha de papel na academia. Agora você poderá ter os seus treinos direto no seu celular ou tablet.",
      },
      beerFinder: {
        description:
          "Programa que consome uma API pública de cerveja, a Punk API, e mostra esses dados de diversas maneiras. Há a opção de pesquisa aleatória, de pesquisar uma cerveja pelo seu ID, ou de mostrar todas elas. Também possui um sistema de login com autenticação e cadastro.",
      },
      moviesFinder: {
        description:
          "Uma enciclopédia de filmes, onde você pode pesquisar os seus filmes favoritos e consultar informações sobre eles. Ao selecionar um filme, você verá informações como orçamento, datas, trailer, etc.",
      },
      expensesTracker: {
        description:
          "Uma aplicação simples para auxiliar no controle financeiro. Possui um sistema de autenticação completo, com login, cadastro e recuperação de senha. Você pode registrar todas as suas despesas diárias com apenas 2 cliques. A ideia é: se você registrar todas as despesas do seu dia, você terá muito mais controle da sua vida financeira.",
      },
    },
  },

  page404: {
    title: "Não encontrado",
    subtitle: "Então... não há nada aqui.",
  },

  footer: {
    text:
      "Construído com o framework Gatsby. O código-fonte está disponível em meu ",
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
