require(`dotenv`).config({path: `.env`,})


module.exports = {
  siteMetadata: {
    name: `Home Improvement Services for Sam’s Club Members`,
    tagline: `Take advantage of home improvement services from the industry’s top brands.`,
    githubLink: `https://github.com/syedahmedhussaini/fit-contentful-gatsby`,
  },  
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
  ],
}