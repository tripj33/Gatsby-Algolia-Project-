/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
	const commercialServiceTemplate = path.resolve(`./src/templates/commercialService.js`)
	const residentialServiceTemplate = path.resolve(`./src/templates/residentialService.js`)
	const newConstructionServiceTemplate = path.resolve(`./src/templates/newConstruction.js`)

	const res = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

	res.data.allContentfulArticle.edges.forEach(edge => {
		createPage({
			component: blogPostTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		})
	})




	// Possibly Needs to be Removed
	const residentialServices = await graphql(`
  query {
	allContentfulResidentialServices{
	  edges {
		node {
		  slug
		}
	  }
	}
  }
`)

	// Possibly Needs to be Removed
	residentialServices.data.allContentfulResidentialServices.edges.forEach(edge => {
		createPage({
			component: residentialServiceTemplate,
			path: `/services/residential/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		})
	})


	const newConstructionServices = await graphql(`
	query {
	  allContentfulNewConstructionServices{
		edges {
		  node {
			slug
		  }
		}
	  }
	}
  `)

	// Possibly Needs to be Removed
	newConstructionServices.data.allContentfulNewConstructionServices.edges.forEach(edge => {
		createPage({
			component: newConstructionServiceTemplate,
			path: `/services/new-construction/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		})
	})




	const commercialService = await graphql(`
	query {
	  allContentfulCommercialServices {
		edges {
		  node {
			slug
		  }
		}
	  }
	}
	`)

	commercialService.data.allContentfulCommercialServices.edges.forEach(edge => {
		createPage({
			component: commercialServiceTemplate,
			path: `/services/commercial/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		})
	})




}


