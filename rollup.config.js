import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

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
      extensions: ['.js', '.ts', '.tsx'], // Ensure .tsx is included
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json', // Use your TypeScript config file
    }),
  ],
  external: ['react', 'react-dom'], // Prevent bundling React
};
