import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `../.env`,
});

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
    keywords:
      "фасады, МДФ, массив, комплектующие, производство, заказать, мебель, качество, индивидуальный подход, гибкая ценовая политика, недорогой товар, доступные цены, экономичные фасады",
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
        name: "Массив Юг",
        short_name: "MYug",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#161B20",
        // Включает подсказку «Добавить на главный экран» и отключает пользовательский интерфейс браузера (включая кнопку «Назад»)
        display: "minimal-ui",
        // display: "standalone",
        icon: "src/images/icon.png", // Этот путь относится к корню сайта.
        // Необязательный атрибут, обеспечивающий поддержку проверки CORS.
        // Если вы не укажете опцию crossOrigin, CORS будет пропущен для манифеста.
        // Любое недопустимое ключевое слово или пустая строка по умолчанию означает `anonymous`
        // crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Orchidea Pro"],
          urls: ["/fonts/orchidea-pro/orchidea-pro.css"],
        },
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
