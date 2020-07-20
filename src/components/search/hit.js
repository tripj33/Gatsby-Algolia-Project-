import React from 'react'
import { Link } from 'gatsby'

import styles from './hit.module.css'

export default ({ hit }) => (
	<div className={styles.prewiew}>
		{/* <img src={hit.heroImage} className={styles.heroImage}></img> */}
		<h3 className={styles.prewievTitle}>
			<Link to={`/articles/${hit.slug}`}>{hit.title}</Link>
		</h3>
		<small>
			<p>{hit.PublishDate}</p>
		</small>
	</div>
)

