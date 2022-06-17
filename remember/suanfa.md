# 一些常见算法


## 排序

>冒泡排序

时间复杂度 O(n)<br>

空间复杂度 O(1)
```javascript
function bubbleSort (list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}
```

>快排

```js
var sort = function(arr) {
　　if (arr.length < 2) return arr;
　　var left = [];
　　var right = [];
　　for (var i = 1; i < arr.length; i++) {
　　　　if (arr[0] > arr[i]) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　console.log(left.concat(arr[0], right))
　　return sort(left).concat(arr[0], sort(right));
}
```

>选择

```javascript
function sort(arr){
  var min = null;
var temp = null;
for (var j = 0; j < arr.length - 1; j++) {
　　min = j;
　　for (var i = j + 1; i < arr.length; i++) {
　　　　if (arr[i] < arr[min]) {
　　　　　　min = i;
　　　　}
　　}
　　temp = arr[j]
　　arr[j] = arr[min];
　　arr[min] = temp;
　　
}
return arr
}
```


## 查找

>二分查找

```javascript
function binarySearch(arr, target){

    let start = 0;
    let end = arr.length - 1;
    if(!end) return -1
    if(end == 1){
        return arr[0] === target ? 0 : -1 
    }
    let middle;
    while(start <= end){
        middle = (start + end) / 2 | 0; // 向下取整
        if(arr[middle] === target){
            return middle
        }else if(target > arr[middle]){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }
    return -1
}
```