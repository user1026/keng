# Element-UI


# ElementUI-Plus

>table中使用插槽

```HTML
//需要使用表格组件的父组件
 <usetable :tableData="tableData" :tableColum="tableColum">
        <template #btn="{ data }"><!---这个data就是子组件传过来的值---->
            <el-button @click="edit(data.$index, data.row)">edit</el-button>
            <el-button @click="del(data.$index, data.row)">del</el-button>
        </template>
    </usetable>
```

```HTML

 <el-table-column :prop="item.prop" :label="item.label" :width="item.width ? item.width : 120">
                <template #default="scope"><!---scope.$index为当前行索引号，scope.row为当前行数据--->
                    <slot :name="item.slotName" :data="scope"><!---通过data向父组件传递scope数据--->

                    </slot>
                </template>
</el-table-column>
```

## 使用element图标

>引入

先安装@element-plus/icons-vue
```javascript
// main.js

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```
>使用

```HTML
<el-icon><Baseball /></el-icon>
```

>动态使用

```HTML
   <component :is="icon"></component>
```


