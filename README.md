# Vite Component Library
- https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma

## create a project
```sh
npm init vite@latest
```

## run project
```sh
npm install
npm run dev
```

## generate types
- generates .d.ts files

```sh
npm i vite-plugin-dts -D
```

## vite.config.ts
```ts
//vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from 'vite-plugin-dts'
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        dts({include: ['lib']})
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
        },
    },
});

```

## inject css as part of js
- what if we were to assume that the application using the library has a bundler configuration that can handle CSS imports?
- the transpiled JavaScript bundle must contain an import statement for the CSS file. 
- vite-plugin-lib-inject-css

```sh
npm i vite-plugin-lib-inject-css -D
```

```ts
// vite.config.ts
import { libInjectCss } from 'vite-plugin-lib-inject-css'
…
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'] })
  ],
…
```

### split the css
- libInjectCSS plugin generates a separate CSS file for each chunk and includes an import statement at the beginning of each chunk's output file.
- So if you split up the JavaScript code, you end up having separate CSS files that only get imported when the according JavaScript files are imported.
- One way of doing this would be to turn every file into an [Rollup entry point](https://rollupjs.org/configuration-options/#input).
- The glob library helps you to specify a set of filenames. In this case it selects all files ending with .ts or .tsx and ignores *.d.ts files

```sh
npm i glob -D
```

## update vite.config.ts
```ts
// vite.config.ts
-import { resolve } from 'path'
+import { extname, relative, resolve } from 'path'
+import { fileURLToPath } from 'node:url'
+import { glob } from 'glob'
…
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
+     input: Object.fromEntries(
+       glob.sync('lib/**/*.{ts,tsx}', {
+         ignore: ["lib/**/*.d.ts"],
+       }).map(file => [
+         // The name of the entry point
+         // lib/nested/foo.ts becomes nested/foo
+         relative(
+           'lib',
+           file.slice(0, file.length - extname(file).length)
+         ),
+         // The absolute path to the entry file
+         // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
+         fileURLToPath(new URL(file, import.meta.url))
+       ])
+     )
    }
…
```
- Now you end up with a bunch of JavaScript and CSS files in the root of your dist folder.

```ts
// vite.config.ts
    rollupOptions: {
…
+     output: {
+       assetFileNames: 'assets/[name][extname]',
+       entryFileNames: '[name].js',
+     }
    }
…
```

- Transpile the library again and all JavaScript files should now be in the same organized folder structure you have created in lib alongside with their type definitions. And the CSS files are inside a new folder called assets.

## package.json
### Main file
- Every npm package has a primary entry point, per default this file is index.js in the root of the package.
- Your library's primary entry point is now located at dist/main.js

```json
// package.json
{
  "name": "my-component-library",
  "private": true,
  "version": "0.0.0",
  "type": "module",
+ "main": "dist/main.js",
+ "types": "dist/main.d.ts",
  …
}
```

## Define the files to publish
```ts
// package.json
  …
  "main": "dist/main.js",
  "types": "dist/main.d.ts",
+ "files": [
+   "dist"
+ ],
  …
```

## Dependencies
- move the react dependencies to the devDepedencies, additionally add them as peerDependencies

```ts
// package.json
- "dependencies": {
+ "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
+   "react": "^18.2.0",
+   "react-dom": "^18.2.0",
    …
  }
```

## Side effects
- To prevent the CSS files from being accidentally removed by the consumer's tree-shaking efforts, you should also specify the generated CSS as side effects

package.json
```json
+ "sideEffects": [
+   "**/*.css"
+ ],
```

## Ensure that the package is built
- use the special lifecycle script `prepublishOnly` to guarantee that your changes are always built before the package is published

## Demo page and deployment
- play around with your components on the demo page, you can simply import the components directly from the root of your project
- This works because your package.json points to the transpiled main file dist/main.ts.

## publish
- to release your package to the public, you have to set private: false in your package.json
```sh
npm publish
```