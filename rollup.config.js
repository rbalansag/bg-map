import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

export default {
  input: 'src/Mapping/index.tsx',
  output: [
    {
      file: 'dist/index.tsx',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.tsx',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
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
    copy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'public/assets'
        }
      ]
    }),
    url({
      include: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.gif'],
      limit: 8192
    })
  ],
  external: ['react', 'react-dom'],
};
