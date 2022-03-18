# Vue2

### 结构
```javascript
<template>
    <div></div>
</template>
<script>
export default{
    name:"",
    components:{},
    data(){
        return {

        }
    },
    methods:{

    },
    beforeCreate(){},
    created(){},
    mounted (){},
    beforeDestory(){},
    computed:{},
    watch:{},
}
</script>
<style lang="" scoped>
</style>
```
### vuex
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count:0,
    },
    mutations: {
        syncAdd(state,val){
            state.count=val
        }
    },
    actions:{
        asynAdd(context,val){
            context.commit("syncAdd",val)
        }
    },
    getters: {
        getCount(state){
            return state.count
        }
    },
    modules:{}
})

export default store

```

