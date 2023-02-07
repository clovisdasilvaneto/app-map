import * as esbuild from "esbuild";

const isDev = process.env.NODE_ENV === '"development"';

let ctx = await esbuild.context({
  entryPoints: ["src/app.js"],
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  define: { "process.env.NODE_ENV": process.env.NODE_ENV },
  outfile: "dist/out.js"
});

if (isDev) {
  await ctx.watch();
} else {
  ctx.dispose();
}
