import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.umd.js",
    format: "umd",
    name: "Binder",
    sourcemap: true,
    exports: "named"
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
          declarationMap: false,
          composite: false,
          module: "ESNext",
          inlineSourceMap: false,
          inlineSources: false,
          sourceMap: true
        }
      }
    })
  ]
};
