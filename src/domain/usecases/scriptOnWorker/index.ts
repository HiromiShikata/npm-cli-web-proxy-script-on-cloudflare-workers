addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response('URL parameter is required', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
    });
    return response;
  } catch (error) {
    return new Response('Error: ' + error.message, { status: 500 });
  }
}
