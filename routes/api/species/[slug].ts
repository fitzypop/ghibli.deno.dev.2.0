import { Handlers } from "$fresh/server.ts";
import data from "~/routes/data.json" assert { type: "json" };

export const handler: Handlers = {
  GET(_req, ctx) {
    const film = data.species.find((x) => x.id == ctx.params.slug);
    if (!film) {
      return new Response(null, { status: 404 });
    }
    return new Response(JSON.stringify(film));
  },
};
