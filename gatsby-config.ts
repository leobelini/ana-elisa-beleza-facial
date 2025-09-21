import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ana Elisa Beleza Facial`,
    description: `Beleza e cuidado que realçam sua essência. Especializada em limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial e dermaplaning.`,
    author: `Ana Elisa Cardoso`,
    siteUrl: `https://anaelisabelezafacial.com.br`,
    keywords: `estética facial, limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial, dermaplaning, beleza`,
    image: `/logo.png`,
    twitterUsername: `@anaelisabeleza`,
    phone: `+55-14-99713-9783`,
    address: {
      street: `Rua das Flores, 123`,
      city: `São Paulo`,
      state: `SP`,
      zipCode: `01234-567`,
      country: `Brasil`
    },
    openingHours: [
      `Segunda a Sexta: 09:00 - 18:00`,
      `Sábado: 09:00 - 16:00`,
      `Domingo: Fechado`
    ],
    social: {
      instagram: `https://instagram.com/anaelisabelezafacial`,
      whatsapp: `https://wa.me/5514997139783`
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Ana Elisa Beleza Facial`,
        short_name: `Ana Elisa`,
        description: `Beleza e cuidado que realçam sua essência`,
        start_url: `/`,
        background_color: `#FAF8F6`,
        theme_color: `#C8A968`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        categories: [`beauty`, `health`, `lifestyle`],
        lang: `pt-BR`
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "data",
        "path": "./src/data/"
      },
      __key: "data"
    }
  ]
};

export default config;
