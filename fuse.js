const { src, watch, context, task } = require("fuse-box/sparky");
const {
  BannerPlugin,
  CSSPlugin,
  FuseBox,
  ImageBase64Plugin,
  JSONPlugin,
  PlainJSPlugin,
  QuantumPlugin,
  ReplacePlugin,
  WebIndexPlugin,
} = require("fuse-box");
const { TypeHelper } = require("fuse-box-typechecker");

context(
  class {
    getConfig() {
      // base config
      const fuse = FuseBox.init({
        alias: {
          "~/component-indexof.js": "component-indexof",
        },
        homeDir: "src",
        output: "dist/$name.js",
        plugins: [
          BannerPlugin("// Written by fuis. 2018-3-24."),
          JSONPlugin(),
          PlainJSPlugin(),
          CSSPlugin(),
          ImageBase64Plugin({
            useDefault: true,
          }),
          WebIndexPlugin({
            template: "src/popup/popup.html",
            target: "popup.html",
            bundles: ["popup"],
          }),
        ],
        sourceMaps: {
          project: true,
          vendor: false,
        },
        target: "browser@es5",
        useTypescriptCompiler: true,
      });

      // bundles
      const bundles = [
        fuse
          .bundle("background")
          .instructions("> background/background.ts")
          .completed(proc => {
            const typeHelper = TypeHelper({
              basePath: "./",
              name: "background typechecker",
              tsConfig: "./tsconfig.json",
              tsLint: "./tslint.json",
            });
            typeHelper.runSync();
          }),
        fuse
          .bundle("popup")
          .instructions("> popup/popup.tsx")
          .completed(proc => {
            const typeHelper = TypeHelper({
              basePath: "./",
              name: "popup typechecker",
              tsConfig: "./tsconfig.json",
              tsLint: "./tslint.json",
            });
            typeHelper.runSync();
          }),
      ];
      if (!this.isProduction) {
        bundles.forEach(it => it.watch());
      }
      return fuse;
    }
  },
);

task("clean", async ctx => {
  await src("./dist")
    .clean("dist/")
    .exec();
});

task("dev", ["clean", "copy-manifest", "copy-assets"], async ctx => {
  ctx.isProduction = false;
  const fuse = ctx.getConfig();
  await fuse.run();
});

task("build", ["clean", "copy-manifest", "copy-assets"], async ctx => {
  ctx.isProduction = true;
  const fuse = ctx.getConfig();
  await fuse.run();
});

task("copy-manifest", () => {
  return watch("./src/*.json").dest("dist/$name");
});

task("copy-assets", () => {
  return watch("./public/*.*").dest("dist/public/$name");
});
