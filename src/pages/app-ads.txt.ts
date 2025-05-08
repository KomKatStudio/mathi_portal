import type { APIRoute } from "astro";
import { readFileSync } from "fs";
import { join } from "path";

export const GET: APIRoute = async () => {
  const content = readFileSync(
    join(process.cwd(), "src/assets/app-ads.txt"),
    "utf-8",
  );

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
