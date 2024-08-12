import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

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
			link: `/geopolitics/${post.slug}/`,
		})),
	});
}
