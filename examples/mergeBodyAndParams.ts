import { Context, helpers, req, res, Server } from "../mod.ts";

const server = new Server();
server.post(
  "/example_json",
  res("json"),
  req("json"),
  async (ctx: Context, next: any) => {
    ctx.res.body = helpers.getQuery(ctx, { mergeParams: true });
    await next();
  },
);
await server.listen({ port: 80 });
