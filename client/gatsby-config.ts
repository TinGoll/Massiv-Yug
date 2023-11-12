import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Массив Юг`,
    siteUrl: `https://www.massiv-yug.ru`,
    image: `/images/icon.png`,
    description: `Наша компания более 20 лет занимается производством элитной мебели, дверей и лестниц из массива дуба, бука и ясеня.
      Дизайн интерьера дома – это ваша индивидуальность, 
      и центральное место здесь занимает качественная стильная мебель. 
      Благодаря компании «МАССИВ-ЮГ» вы сами можете принять участие в создание своей мебели из массива, 
      выбирая её стилистику, конфигурацию, цветовые решения и фурнитуру. Всё остальное сделаем мы.`,
    keywords: "фасады, МДФ, массив, комплектующие, производство, заказать, мебель, качество, индивидуальный подход, гибкая ценовая политика, недорогой товар, доступные цены, экономичные фасады",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
