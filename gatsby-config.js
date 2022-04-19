require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// 開発環境ではPreviewAPIを使用し、下書きも含めて表示する
const contentfulOptions = {spaceId: process.env.CONTENTFUL_SPACE_ID}
if (process.env.NODE_ENV === 'development') {
  contentfulOptions.accessToken = process.env.CONTENTFUL_PREVIEW_KEY
  contentfulOptions.host = 'preview.contentful.com'
} else {
  contentfulOptions.accessToken = process.env.CONTENTFUL_API_KEY
}

module.exports = {
  siteMetadata: {
    title: "Newport 1963",
    description: "備忘録のようなもの",
    author: "jathinus",
    siteUrl: "https://newport1963.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_TRACKING_ID],
        pluginConfig: {
          head: true
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulOptions
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon.svg`,
      },
    },
  ],
}