

module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  rules: {
    // 在这里书写规则
    // 不允许修改参数
    'no-param-reassign': 'off',
    // 确保没有通过依赖项返回该模块的可解析路径。
    'import/no-cycle': 'off',
    // 按钮需要类型
    'react/button-has-type': 'off',
  },

  // 你的环境变量（包含多个预定义的全局变量）
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  // 你的全局变量（设置为 false 表示它不允许被重新赋值）
  // globals: {},
}
