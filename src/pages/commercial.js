import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from '../components/head'

const CommercialPage = () => {
	const data = useStaticQuery(graphql`
    query {
		allContentfulCommercialServices {
        edges {
          node {
            serviceName
            slug
          }
        }
      }
    }
  `)


	console.log(data)

	return (
		<Layout>
			<ol>
				{data.allContentfulCommercialServices.edges.map(edge => {
					return (
						<li>
							<Link to={`/commercial/${edge.node.slug}`}>
								<h2>{edge.node.serviceName}</h2>
							</Link>
							<br />
							{/* <p>{edge.node.excerpt}</p> */}
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}
export default CommercialPage
