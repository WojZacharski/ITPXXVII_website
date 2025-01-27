import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Inżynierskie Targi Pracy BEST KRAKÓW`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Unica One`,
            file: `https://fonts.googleapis.com/css2?family=Unica+One&display=swap`,
          },
        ],
      },
    },
    // The key plugins for ImageSharp types:
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

export default config
