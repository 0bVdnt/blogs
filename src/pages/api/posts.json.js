import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blog');
    const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    const postData = sortedPosts.map((post) => {
        const baseUrl = import.meta.env.BASE_URL.endsWith('/')
            ? import.meta.env.BASE_URL
            : import.meta.env.BASE_URL + '/';

        return {
            id: post.id,
            title: post.data.title,
            description: post.data.description,
            date: post.data.pubDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            link: `${baseUrl}${post.id}/`
        };
    });

    return new Response(JSON.stringify(postData), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}
