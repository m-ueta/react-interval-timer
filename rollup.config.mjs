import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    external: ['react', 'prop-types'],
    plugins: [
        resolve(),
        babel({
            babelHelpers: 'bundled',
            presets: [
                ['@babel/preset-env', { modules: false, targets: '> 0.5%, not dead' }],
            ],
            extensions: ['.js'],
        }),
    ],
    output: [
        { file: 'lib/index.js', format: 'cjs', exports: 'default' },
        { file: 'es/index.js', format: 'esm' },
    ],
};
