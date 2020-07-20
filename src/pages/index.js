import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from '../components/head'

import Layout from "../components/layout"
import WordCarousel from "../components/WordCarousel"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexStyle from "./index.module.scss"
import Sink from "../assets/images/Originals/Kitchen/Kitchen Sink Repairs.jpg"
import ServiceImages from "../components/serviceimages"

// const words = ["This", "Is", "Sparta!"]
// let position = 0
// let target = document.getElementById("word-target")

const IndexPage = () => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

	return (
		<Layout>
			<Head title="Home" />
			<WordCarousel />
			<ServiceImages />
			<div>{data.site.siteMetadata.title}</div>
			<br />
			<div>{data.site.siteMetadata.author}</div>
		</Layout>
	)
}

export default IndexPage
