import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/ma-shell.js',
  format: 'iife',
  moduleName: 'ctShell',
  dest: 'dist/ma-shell.js', // equivalent to --output
  plugins: [
    // eslint(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: [
        'node_modules/**',
      ]
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ]
};
