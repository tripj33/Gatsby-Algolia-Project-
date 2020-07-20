import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from '../components/head'

const NewConstructionPage = () => {
	const data = useStaticQuery(graphql`
    query {
		allContentfulNewConstructionServices {
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
				{data.allContentfulNewConstructionServices.edges.map(edge => {
					return (
						<li>
							<Link to={`/new-construction/${edge.node.slug}`}>
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
export default NewConstructionPage
