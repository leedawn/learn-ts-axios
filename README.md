# chapter3

### 1. 编写基础请求代码

主要是实现了基础请求的测试代码， 测试代码放置在 examples 目录。

1. 使用 express 启动服务器，将首页作为静态文件进行启动。另外对 simple 目录的内容，使用了 webpack 进行打包处理，结合插件 webpack-dev-middleware 和 webpack-hot-middleware 进行启动和更新。

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
