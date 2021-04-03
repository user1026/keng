<template>
  <div>
   <input type="text" v-model="x.id">
   <input type="text" v-model="x.name">
   <input type="text" v-model="x.age">
   <ul>
     <li v-for="item in user" :key="item.id">{{item.id}} {{item.name}} {{item.age}}</li>
   </ul>
    <button @click="change">123</button>
    <router-link to="/one">one</router-link>
    <router-link to="/two">two</router-link>
    <div class="q">
      <router-view></router-view>
    </div>
   
  </div>
</template>

<script>
  import {ref,reactive} from "vue"
export default {
 setup(){
 let user=reactive([]);
 let x=reactive({
    id:'',
   name:'',
   age:''
 })
 let id=ref("");
 let name=ref('');
 let age=ref('');
 function change(e){
   e.preventDefault();
    user.push({id:x.id,name:x.name,age:x.age})
    //user.push({id:id.value,name:name.value,age:age.value})
    console.log(user);
 }
return {user,x,id,name,age,change}
 }
 
};
</script>

<style  scoped>
.q{
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  left:400px;
}
</style>