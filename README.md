
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `pnpm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### 包的新增/删除/更新

pnpm add xxx 新增

pnpm remove xxx 删除

pnpm update xxx 更新

### pnpm run lint 

使用eslint 校验.tsx,.ts,.js后缀的文件

### pnpm run lint:stylelint 

使用stylelint 校验scss,css,less等样式文件

## pnpm run prepare 

husky命令

## pnpm run commit 

自动化的提交commit，已配置了husky的commit-msg检查，

git commit 仍然是普通的 git 提交模式；但使用 yarn commit 会执行交互式 commit 提交，在终端跟着提示一步步输入，就能生成规范的 commit message。

日常的提交先使用 git add .，再使用 npm run commit 代替 git commit，如果使用 git commit 命令提交必须书写符合规范的提交记录。

配置文件 .cz-config.js 文件，用于自定义commit提示信息

如果某次提交想要禁用 husky，可以添加参数 --no-verify
git commit --no-verify -m "xxx"


### 集成lint-staged 

```  "lint-staged": {
    "src/*.{js,jsx,ts,tsx}": [
      "pnpm run lint"
    ],
    "src/*.{scss,css,less}": [
      "pnpm run lint:stylelint"
    ]
   }
```
这条命令的意思是，
对于暂存区中src文件夹下后缀名为ts,tsx,js,jsx的文件执行eslint校验并自动修复可修复的eslint报错,
对暂存区的scss,css,less文件进行stylelint校验