import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
	  contentfulCommercialServices(slug: { eq: $slug }) {
	  serviceName
	  serviceImage{
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

const CommercialService = props => {
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
			<img alt={props.data.contentfulCommercialServices.serviceImage.title} src={props.data.contentfulCommercialServices.serviceImage.file.url} />
			<h1>{props.data.contentfulCommercialServices.serviceName}</h1>
			{documentToReactComponents(
				props.data.contentfulCommercialServices.serviceDescription.json,
				options
			)}
		</Layout>
	)
}

export default CommercialService
