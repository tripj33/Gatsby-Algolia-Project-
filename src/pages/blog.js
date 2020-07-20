import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from '../components/head'
const BlogPage = () => {
	const data = useStaticQuery(graphql`
    query {
      allContentfulArticle(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
	console.log(data)

	return (
		<Layout>
			<ol>
				{data.allContentfulArticle.edges.map(edge => {
					return (
						<li>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
							</Link>
							<p>{edge.node.date}</p>
							<br />
							{/* <p>{edge.node.excerpt}</p> */}
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}
export default BlogPage
