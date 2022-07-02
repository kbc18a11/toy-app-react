# BootStrapの適用
```
npm install react-bootstrap bootstrap
```
App.tsxに以下を追加
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

# emotionの適用
```
npm install @emotion/react
```

# Linter設定 
```
npm install eslint -D
npm init @eslint/config
```

```
npx: installed 40 in 16.035s
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.28.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react-hooks@^4.3.0 @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```
.eslintrc.jsに追加

```js 
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'react-hooks/rules-of-hooks': [
      'error',
    ],
    'react-hooks/exhaustive-deps': [
      'error',
    ],
    semi: ['error', 'always'],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
  overrides: [
    {
      files: ['**/vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

```

# Linterの確認
package.jsonのscriptsに追加
```
"lint": "eslint --ext .tsx,.ts src/"

```

# vite.config.tsの以下のエラーの対応方法
- `'@vitejs/plugin-react' should be listed in the project's dependencies, not devDependencies`
- `'vite' should be listed in the project's dependencies, not devDependencies.`

.eslintrc.jsに以下を追加
```js
  overrides: [
    {
      files: ['**/vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
```

# viteで、絶対パスの設定
tsconfig.jsonに追加
```json
"compilerOptions": {
  {
    "baseUrl": "src"
  }
}
```
```
npm install @types/node -D
```
vite.config.tsxに以下を追加
```ts
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
+  resolve: {
+    alias: {
+      components: path.resolve(__dirname, 'src/components'),
+    },
+  },
});

```
# react-routerの設定
```
npm install react-router-dom
```

App.tsxに追加
```ts
const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={<Index />}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

```
