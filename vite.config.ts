import { defineConfig } from 'vite';
import path from 'path';

import { extname, relative } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
    resolve: {
        alias: {
            lib: path.resolve(__dirname, 'lib') // Point 'lib' to the root 'lib' folder,
        }
    },
    plugins: [
        react(),
        libInjectCss(),
        dts({
            tsconfigPath: './tsconfig.app.json',
            include: ['lib'],
            outDir: 'dist/types',
            entryRoot: 'lib',
            rollupTypes: true
        })
    ],
    optimizeDeps: {
        include: ['@mankindui/core/components']
    },
    build: {
        copyPublicDir: false,
        sourcemap: true,
        lib: {
            entry: Object.fromEntries(
                glob
                    .sync('lib/**/*.{ts,tsx}', {
                        ignore: ['lib/**/*.d.ts']
                    })
                    .map((file) => [
                        // The name of the entry point
                        // lib/nested/foo.ts becomes nested/foo
                        relative('lib', file.slice(0, file.length - extname(file).length)),
                        // The absolute path to the entry file
                        // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url))
                    ])
            ),
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                preserveModules: true,
                preserveModulesRoot: 'lib'
            },
            treeshake: false
        }
    }
});