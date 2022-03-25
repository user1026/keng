# 配置文件
### VUE3+vite
```javascript
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //配置element自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // 设置 '@' 等价于 './src' 
    },
  },
  define: {
    "process.env": {
      "BASE_URL": "http://localhost:9000"
    }
  },
  //配置代理
  server: {
  proxy: {
    // 字符串简写方式
    '/api': 'http://localhost:9000' ,//后台接口地址
    // 选项写法
    '/api': {
      target: 'http://localhost:9000', // 所要代理的目标地址，也就是后台接口地址
      rewrite: path => path.replace(/^\/api/, ''), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
      changeOrigin: true,  // true/false, Default: false - changes the origin of the host header to the target URL
    }
  }
}
})
```
### vue2+vue-cli配置代理
```javascript
devServer: {
    proxy: {
        '/api': {     //这里最好有一个 /
            target: 'http://localhost:9000',  // 后台接口域名
            ws: true,        //如果要代理 websockets，配置这个参数
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite:{
                '^/api':''//重写路径
            }
        }
    }
  }
```