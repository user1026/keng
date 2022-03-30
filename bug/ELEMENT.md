# Element-UI 

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
以上代码在运行时，当点击左边菜单栏时，右边tabs会添加一个激活的tab，但是这个tab一片空白不会显示任何东西，具体原因未知，正确的写法是将<router-view />写在外面，如下所示：
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
