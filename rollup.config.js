import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/Mapping/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
      excludeExtensions: ['.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg']
    }),
    commonjs(),
    postcss({
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top'
      }
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: ['react', 'react-dom'],
};
