# chapter1
### 1 初识 Typescript 
1. TypeScript 作为 JavaScript 语言的超集，它为 JavaScript 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。
2. 特点。
- TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的JavaScript 引擎中。
- 类型允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。
- TypeScript 提供最新的和不断发展的 JavaScript 特性，
### 2 安装 Typescript
1. 安装 node.js
2. 全局安装 typescript，安装之后可以使用 tsc 命令
### 3 编写第一个 Typescript 程序
demos/start.ts   利用类和接口实现一个给自己打招呼的程序

** 需要有提示 typescript 错误的插件：需要设置 vscode，开启 typescript validate

## 3. Typescript 类型系统
### 3.1 基础类型（上）
number，string，boolean，数组，元组
### 3.2 基础类型（下）
枚举，any，void，null 和 undefined，never，对象，类型断言

## 4. ts-axios 项目构建
### 4.1 需求分析
介绍了完成这个项目需要做的事情
### 4.2～4.4 初始化项目
1. 使用脚手架工具 Typescript library starter
2. 关联到远程分支，需要使用提供的指令进行 commit

### 4.5～4.7 编写基础请求代码

# chapter3

### 1. 编写基础请求代码

主要是实现了基础请求的测试代码， 测试代码放置在 examples 目录。

1. 使用 express 做为启动服务器，将首页作为静态文件进行启动。另外对 simple 目录的内容，使用了 webpack 进行打包处理，结合插件 webpack-dev-middleware 和 webpack-hot-middleware 进行启动和更新。

2. 打开首页后，点击按钮，会去到 simple 目录的首页，这时候会执行文件里面的 axios 请求。express 的路由接收到该请求，就会返回对应的内容。

# chapter4

### 1. body

对请求 body 进行处理，当 body 是纯对象的时候转化成 json。为什么只对纯对象而不是对象进行处理，因为 FormData 和 ArrayBuffer 虽然是对象，但是不需要进行处理。

### 2. header

1. 如果请求 header 中，content-type 的单词首字母没有大写则转换成大写的形式；
2. 如果 data 是纯对象，请求有 header 但是 header 里面没有 content-type，则增加一个默认的 content-type;
3. 当请求的 data 没有内容，可是包含了 Content-Type，则删除 Content-Type

### 3. 获取响应数据

1. 定义 AxiosPromise 接口，它继承自 Promise<AxiosPromise> 这个泛型接口
2. xhr 函数增加 onreadystatechange 处理函数，返回的是 AxiosPromise 类型

### 4. 处理响应 header

1. 响应的 header 本来是一个字符串，里面的每一行数据使用 \r\n 进行结尾。在转换处理的时候，可以先转成数组，再对每个元素进行处理。对于每个元素来说，
   通过:标记拆分成 key 和 value，再把它们统一保存到一个对象里面。

### 5. 处理响应 data

1. 如果不设置 responseType 返回的数据是字符串，这个时候可以进行转换，得到一个 JSON 对象

# chapter5
### 1. 错误处理
1. 网络出现异常的时候会触发 xmlHttpRequest 的 onerror 事件
2. 可以设置超时时间，规定时间内没有响应则自动停止，并触发 timeout 事件
3. 对于正常的请求，返回的是200～300的状态码，其他状态码则表示异常请求

### 2. 错误信息增强
