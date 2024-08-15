import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const geopoliticsPosts = await getCollection('geopolitics');
	const essaysPosts = await getCollection('essays');

	const allPosts = [...geopoliticsPosts, ...essaysPosts];

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts.map((post) => ({
			...post.data,
			link: post.collection === 'geopolitics' 
				? `/geopolitics/${post.slug}/` 
				: `/essays/${post.slug}/`,
		})),
	});
}
