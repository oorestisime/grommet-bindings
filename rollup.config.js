import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import cleanup from "rollup-plugin-cleanup";

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});
const defaultExternal = deps.concat(peerDeps);

const config = {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: "dist/formik-grommet.umd.js",
      format: "umd",
      name: "@oorestisime/formik-grommet"
    },
    {
      file: pkg.module,
      format: "esm"
    }
  ],
  external: defaultExternal,
  plugins: [
    resolve({ preferBuiltins: false, modulesOnly: true }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"]
    }),
    commonjs({ include: "node_modules/**" }),
    cleanup()
  ]
};

export default config;
