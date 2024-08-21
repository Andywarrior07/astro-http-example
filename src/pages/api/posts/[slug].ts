import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params;
  const post = await getEntry('blog', slug);

  if (!post) {
    return new Response(JSON.stringify({ message: 'Post Not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify({ ...body, method: 'PUT' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify({ ...body, method: 'PUT' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export const DELETE: APIRoute = async ({ params, request }) => {
  return new Response(JSON.stringify({ message: 'Post deleted' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

// export const getStaticPathds = async () => {
//   const posts = await getCollection('blog');
//
//   return posts.map((post: any) => ({ params: { slug: post.slug } }));
// }