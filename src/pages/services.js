import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from '../components/head'
const ServicePage = () => {
	const data = useStaticQuery(graphql`
  query{
	allContentfulResidentialServices{
	  edges{
		node{
		  serviceName
		  slug
		}
	  }
	}
	allContentfulCommercialServices{
	  edges{
		node{
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
			<div className="residential">
				<ul>
					{data.allContentfulResidentialServices.edges.map(edge => {
						return (
							<li>
								<Link to={`/residential/${edge.node.slug}`}>
									<h2>{edge.node.serviceName}</h2>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>

			<div className="commercial">
				<ul>
					{data.allContentfulCommercialServices.edges.map(edge => {
						return (
							<li>
								<Link to={`/commercial/${edge.node.slug}`}>
									<h2>{edge.node.serviceName}</h2>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>


		</Layout>
	)
}
export default ServicePage
