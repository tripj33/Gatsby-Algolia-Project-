require('dotenv').config();
(async () => {
	const algoliasearch = require('algoliasearch')
	const { createClient } = require('contentful')


	const GATSBY_ALGOLIA_APP_ID = process.env.GATSBY_ALGOLIA_APP_ID
	const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY
	const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME

	const space = process.env.CONTENTFUL_SPACE_ID
	const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

	const algoliaClient = algoliasearch(GATSBY_ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
	const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX_NAME)

	const ctfClient = createClient({
		space,
		accessToken,
	})

	try {
		const { items } = await ctfClient.getEntries({
			content_type: 'blogPost',
			limit: 1000,
		})

		const posts = items.map((post) => ({
			slug: post.fields.slug,
			title: post.fields.title,
			publishedDate: post.fields.publishedDate,
			objectID: post.sys.id

		}))

		const indexedContent = await algoliaIndex.saveObjects(posts, true)

		console.log('Indexed Content -->  :', indexedContent)

	}
	catch (err) {
		console.error(err)
	}
})()