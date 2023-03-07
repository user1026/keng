# Element-UI 和Element-plus

## Element-UI
### tabs标签页结合router-view显示空白问题


```HTML
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
   <router-view />
  </el-tab-pane>
</el-tabs>
```

以上代码在运行时，当点击左边菜单栏时，右边tabs会添加一个激活的tab，但是这个tab一片空白不会显示任何东西，具体原因未知。<br>

<font color="blue">正确的写法是将`<router-view />`写在外面，如下所示：</font>
```HTML

<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
  </el-tab-pane>
</el-tabs>
 <router-view />
```

### 解决elementui table合计不显示的问题
有时候需要在table的底部有合计，这时候官方给的是在table里设置，show-summary就可以了

但是给table加了一个固定高度话，就没有了，打开控制台可以看到这个合计是存在的

```js
this.$nextTick(() => {
   this.$refs['table'].doLayout();
})
```

## Element-Plus


### 标签写错导致报含有错误标签的相关文件找不到

一下代码是在leftMenu组件中并导入index.vue
```HTML

 <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
    <!-----此处有误------->
        <el-sub-item index="/">
            <template #title>
                <div @click="addtabs('/home')">
                    <el-icon>
                        <home-filled />
                    </el-icon>
                    <span>首页</span>
                </div>
            </template>
        </el-sub-item>
    </el-menu>
```
原本正确的标签名叫`<el-menu-item></el-menu-item>`，而我写成了`<el-sub-item></el-sub-item>`，但是报的错并不是标签错误而是这个leftMenu文件找不到
```
Failed to resolve import "element-plus/es/components/sub-item/style/css" from "src\view\baseHtml\home\leftMenu\index.vue". Does the file exist?
V:/Vue3/src/view/baseHtml/home/leftMenu/index.vue:2:80
1  |  /* unplugin-vue-components disabled */import { ElMenu as __unplugin_components_2 } from 'element-plus/es';import 'element-plus/es/components/menu/style/css';
2  |  import { ElSubItem as __unplugin_components_1 } from 'element-plus/es';import 'element-plus/es/components/sub-item/style/css';
   |                                                                                 ^
3  |  import { ElIcon as __unplugin_components_0 } from 'element-plus/es';import 'element-plus/es/components/icon/style/css';
4  |  import { ref, reactive, onMounted } from 'vue'
    at formatError (V:\Vue3\node_modules\vite\dist\node\chunks\dep-3daf770c.js:42587:46)
    at TransformContext.error (V:\Vue3\node_modules\vite\dist\node\chunks\dep-3daf770c.js:42583:19)
    at normalizeUrl (V:\Vue3\node_modules\vite\dist\node\chunks\dep-3daf770c.js:80909:26)
    at async TransformContext.transform (V:\Vue3\node_modules\vite\dist\node\chunks\dep-3daf770c.js:81049:57)
    at async Object.transform (V:\Vue3\node_modules\vite\dist\node\chunks\dep-3daf770c.js:42803:30)
    at async doTransform (V:\Vue3\node_modules\vite\dist\node\chunks\dep-3daf770c.js:57478:29
```

改成正确的标签名字后这个问题消失


### 图标不显示

<font color="blue">需要下载`@element-plus/icons-vue`，然后使用时导入需要使用的图标，例如：</font>
```javascript
import {
    Expand,
    HomeFilled
} from "@element-plus/icons-vue"//注意开头字母全部大写，中间有连接线的，连接线后的第一个字母大写
```