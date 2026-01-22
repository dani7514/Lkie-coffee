import type { Plugin } from 'vite';
import { handleFormPayload } from './src/api/route';

export function apiPlugin(): Plugin {
  return {
    name: 'api-plugin',
    configureServer(server) {
      // Handle OPTIONS for CORS first
      server.middlewares.use('/api', (req, res, next) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.statusCode = 200;
          res.end();
          return;
        }
        next();
      });

      // Handle POST requests
      server.middlewares.use('/api', async (req, res, next) => {
        // Only handle POST requests
        if (req.method !== 'POST') {
          return next();
        }

        try {
          // Read request body
          let body = '';
          req.on('data', (chunk) => {
            body += chunk.toString();
          });

          req.on('end', async () => {
            try {
              const payload = JSON.parse(body);
              
              // Use the existing handleFormPayload function
              const result = await handleFormPayload(payload);

              // Set CORS headers
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
              res.setHeader('Content-Type', 'application/json');
              
              res.statusCode = result.status;
              res.end(JSON.stringify(result.body));
            } catch (error) {
              console.error('[vite-plugin-api] Error processing request:', error);
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ 
                error: 'Failed to process request',
                details: error instanceof Error ? error.message : String(error)
              }));
            }
          });
        } catch (error) {
          console.error('[vite-plugin-api] Error:', error);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      });
    },
  };
}
