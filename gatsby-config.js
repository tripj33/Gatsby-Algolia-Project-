require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

// const contentfulConfig = {
// 	spaceId: process.env.CONTENTFUL_SPACE_ID,
// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// 	host: process.env.CONTENTFUL_HOST,
// 	autoGenerateObjectIDIfNotExist: true,
// }

// const { spaceId, accessToken } = contentfulConfig

// if (!spaceId || !accessToken) {
// 	throw new Error(
// 		'Contentful spaceId and the access token need to be provided'
// 	)
// }

const myQuery = `{
		allContentfulArticle{
		  edges{
			node{
			  title
			  slug
			  publishedDate
			  id
			  articleBody{
				json
			  }
			}
		  }
		}
	  

}`


const queries = [
	{
		query: myQuery,
		transformer: ({ data }) => data.allContentfulArticle.edges.map(({ node }) => node), // optional
		// Array<String> overrides main match fields, optional
	},
	require('./src/utils/algolia'),
];


const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig
if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the access token need to be provided.'
	)
}


module.exports = {
	siteMetadata: {
		title: `Chicagoland Plumbing`,
		description: `Chicagoland Plumbing Services is a full-service plumbing company based in Mokena. `,
		author: `Jake Janik`,
		url: "http://www.chicagolandplumbing.com",
		image: ""
	},
	plugins: [




		`gatsby-plugin-styled-components`,

		'gatsby-plugin-react-helmet',
		{
			resolve: "gatsby-source-contentful",
			options: contentfulConfig,
		},
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-relative-images",
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 1200,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "src",
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},


		{
			resolve: `gatsby-plugin-algolia`,
			options: {
				appId: process.env.GATSBY_ALGOLIA_APP_ID,
				apiKey: process.env.ALGOLIA_ADMIN_KEY,
				indexName: process.env.ALGOLIA_INDEX_NAME,
				queries,
				chunkSize: 10000, // default: 1000
			},

		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
