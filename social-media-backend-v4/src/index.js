require('dotenv').config({ path: './src/config/.env' });

const PORT = Number(process.env.PORT || 3000);

// Basic Bun HTTP server replacing Express
Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/api/health') {
      return Response.json({ message: 'API is healthy' });
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`Bun server running on port ${PORT}`);
