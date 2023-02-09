import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Test SSR`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "axKHSufb9ft1Mh5ZvFvYMrqY6EjoZAXM4xFyX0Nh1oQ",
      "spaceId": "u8pqt62tmvfo"
    }
  }]
};

export default config;
