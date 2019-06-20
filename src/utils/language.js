const textLabelsEn = {
  index: {
    title: "Rodrigo Vieira",
    subtitle: "I make web and mobile apps.",
  },

  contact: {
    title: "Say hello to me!",
    subtitle:
      "If you for some reason wish to talk with me, I'd love to be delighted with your message.",
    paragraph: "Shoot me at rodriigovieira@gmail.com!",
  },

  blog: {
    title: "My Blog",
    subtitle: "You can find all the stuff I love to talk about here.",
  },

  about: {
    title: "I am Rodrigo.",
    subtitle:
      "I love making stuff. Specially when we're talking about mobile or webapps.",
  },

  page404: {
    title: "Not found",
    subtitle: "Ergh.... There's nothing here.",
  },

  footer: {
    text:
      "© Created by Rodrigo Vieira, 2019. Website built with the Gatsby framework.",
  },

  header: {
    homepage: "Home Page",
    about: "About",
    contact: "Contact",
    blog: "Blog",
  },
}

const textLabelsPt = {
  index: {
    title: "Rodrigo Vieira",
    subtitle: "Eu faço aplicações mobile e web.",
  },

  contact: {
    title: "Diga oi para mim!",
    subtitle:
      "Se você deseja entrar em contato comigo, é o meu maior prazer ser digno do seu contato.",
    paragraph: "Meu e-mail é: rodriigovieira@gmail.com!",
  },

  blog: {
    title: "Meu Blog",
    subtitle:
      "Você pode encontrar todas as coisas que eu adoro falar sobre aqui.",
  },

  about: {
    title: "Eu sou Rodrigo.",
    subtitle:
      "Adoro fazer coisas. Especialmente quando essas coisas são aplicações mobile ou web",
  },

  page404: {
    title: "Não encontrado",
    subtitle: "Então... não há nada aqui.",
  },

  footer: {
    text:
      "© Criado por Rodrigo Vieira, 2019. Construído com o framework Gatsby.",
  },

  header: {
    homepage: "Página Inicial",
    about: "Sobre",
    contact: "Contato",
    blog: "Blog",
  },
}

const getLanguageObject = lang => {
  if (lang === "en") return textLabelsEn
  else if (lang === "pt") return textLabelsPt

  return textLabelsPt
}

export default getLanguageObject
