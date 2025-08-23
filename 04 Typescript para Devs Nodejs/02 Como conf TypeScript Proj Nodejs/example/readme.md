>#### Initializin Node.js using NPM
>```shell
>npm init -y
>
>```

>#### Configure ECMA module
>```json
>  "type": "module",
>```

>#### Configure scripts
>```json
>"start:dev:node": "node src/index.js",
>```

>#### Installing Typescript
>```prompt
>npm install -D typescript
>```

>#### Create .gitignore
>Create .gitignore file and include "node_modules/" foder:\
>![index.ts and index.js](./downloads/img3.png)

#### Transpile index.ts and run index.js
```bash
npx tsc src/index.ts
npm run start:dev:node
```
 >#### Configure scripts for transpile index.ts and run index.js
>
> Include these lines in package.json ("tsconfig.json" without attribute "outDir")
>```json
>"dist": "npx tsc src/index.ts",
>"start:dev": "npm run dist && node src/index.js"
>```
> Include these lines in package.json ("tsconfig.json" with attribute "outDir")
>```json
>"dist": "npx tsc",
>"start:dev": "npm run dist && node dist/index.js"
>```
>without "outDir"\
>![index.ts and index.js](./downloads/img1.png)
>
>with "outDir"\
>![index.ts and index.js](./downloads/img2.png)
>
> Create tsconfig.json
>```bash
>npx tsc --init
>```
> In tsconfig.json - CommonJS modules
>```json
> {
>  "compilerOptions": {
>    "module": "CommonJS",
>    "target": "ES6", 
>    "outDir": "./dist",
>    "esModuleInterop": true,
>    "strict": true
>  }
>}
>```
>
> In tsconfig.json - ECMA modules
>```json
> {
>  "compilerOptions": {
>    "module": "nodenext", // 
>    "target": "ES6", 
>    "outDir": "./dist",
>    "esModuleInterop": true,
>    "strict": true
>  }
>}
>```

> #### Installing tsx for run TypeScript code without worrying about configuration!
>
>```bash
>npm install tsx -D
>```
> In package.json (witch outDir)"
>```json
>"dist": "npx tsc",
>"start:dev": "tsx src/index.ts"
>"start:watch": "tsx watch src/index.ts"
>"start:dist": "npm run dist && node dist/index.js"
>```

> #### Intaling tsup for Bundle your TypeScript library with no config
>```bash
>npm install tsup -D
>```
> In package.json if "type" is "commonjs"
>```json
>"dist": "tsup src"
>"start:dist:tsup": "npm run dist:tsup && node dist/index.cjs"
>```
>
> In package.json if "type" is "module"
>```json
>"dist": "tsup src"
>"start:dist:tsup": "npm run dist:tsup && node dist/index.js"
>```
