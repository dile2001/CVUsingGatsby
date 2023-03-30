module.exports = {
  siteMetadata: {
    siteUrl: 'https://dilelgent.com',
    name: 'Di Le',
    role: 'Developer at Emirates',
    bio: 'My short bio that I will use to introduce myself.'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-bio',
        path: `${__dirname}/MDX`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    'gatsby-plugin-postcss'
  ],
};