/**
 * Cloudflare Worker Entry Point for Antellay OS
 *
 * Serves the compiled Vite React SPA from Workers Static Assets (env.ASSETS).
 * Single Page Application routing (SPA) automatically routes all subpages
 * (/about, /vision, /mission, /architecture, /futuhr, /contact) to index.html.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
