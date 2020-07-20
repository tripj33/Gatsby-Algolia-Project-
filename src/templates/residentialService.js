import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
	  contentfulResidentialServices(slug: { eq: $slug }) {
	  serviceName
	  serviceImage{
		fluid(maxWidth: 500, maxHeight: 500){
			...GatsbyContentfulFluid
		  }
		  title
		  file{
			  url
		  }
	  }
      serviceDescription {
        json
      }
    }
  }
`

const ResidentialService = props => {
	const options = {
		renderNode: {
			"embedded-asset-block": node => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url} />
			},
		},
	}
	return (
		<Layout>
			<Img fluid={props.data.contentfulResidentialServices.serviceImage.fluid} style={{ maxWidth: `200px` }} />
			{/* <img alt={props.data.contentfulResidentialServices.serviceImage.title} src={props.data.contentfulResidentialServices.serviceImage.file.url} /> */}
			<h1>{props.data.contentfulResidentialServices.serviceName}</h1>
			{documentToReactComponents(
				props.data.contentfulResidentialServices.serviceDescription.json,
				options
			)}
		</Layout>
	)
}

export default ResidentialService
