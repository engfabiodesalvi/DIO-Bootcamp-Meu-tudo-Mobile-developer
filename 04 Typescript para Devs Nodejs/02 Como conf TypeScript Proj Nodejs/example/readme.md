#### Initializin Node.js using NPM
```shell
npm init -y
```
#### Configure ECMA module
```json
  "type": "module",
```
#### Configure scripts
```json
"start:dev": "node src/index.js",
```
#### Installing Typescript
```prompt
npm install -D typescript
```
#### Create .gitignore
>Create .gitignore file and include "node_modules/" foder:\
![index.ts and index.js](./downloads/img3.png)

#### Transpile index.ts and run index.js
```bash
npx tsc src/index.ts
npm run start:dev:js
```
 >#### Configure scripts for transpile index.ts and run index.js
>
> Include in package.json ("tsconfig.json" without attribute "outDir")
>```json
>"dist": "npx tsc src/index.ts",
>"start:dev": "npm run dist && node src/index.js"
>```
> Include in package.json ("tsconfig.json" with attribute "outDir")
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
> In tsconfig.json
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

> #### Installing tsx for run index.ts without compile
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

> #### Intaling tsup compile faster
>```bash
>npm install tsup -D
>```
> In package.json
>```json
>"dist": "tsup src"
>"start:dist:tsup": "npm run dist:tsup && node dist/index.cjs"
>```
>

>

