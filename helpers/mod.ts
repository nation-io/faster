import { Context } from "../mod.ts";

export function getQuery(
  ctx: Context,
  options: { mergeParams: boolean },
): any {
  if (options.mergeParams) {
    return {
      ...ctx.body,
      ...[...ctx.url.searchParams.entries()].reduce(
        (acc, [k, v]) => ({ ...acc, [k]: v }),
        {},
      ),
    };
  }

  return {
    ...[...ctx.url.searchParams.entries()].reduce(
      (acc, [k, v]) => ({ ...acc, [k]: v }),
      {},
    ),
  };
}
