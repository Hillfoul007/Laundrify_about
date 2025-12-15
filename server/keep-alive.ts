import cron from "node-cron";

export function setupKeepAlive(port: number) {
  const baseUrl = process.env.RENDER_EXTERNAL_URL || `http://localhost:${port}`;

  // Run every 14 minutes to keep the service awake
  cron.schedule("*/14 * * * *", async () => {
    try {
      const response = await fetch(`${baseUrl}/api/ping`);
      if (response.ok) {
        console.log(`[Keep-Alive] Pinged service at ${new Date().toISOString()}`);
      }
    } catch (error) {
      console.error(`[Keep-Alive] Failed to ping service:`, error);
    }
  });

  console.log(`[Keep-Alive] Service keep-alive scheduled (every 14 minutes)`);
}
