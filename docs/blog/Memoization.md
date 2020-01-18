# Memoization
 Memoization用于优化比较耗时的计算， 通过将计算结果缓存到内存中，这样对于同样的输入值， 下次只需要从内存中读取结果即可
```
function memoizeFunction(func){
  var cache = {};
  return function()
  {
    var key = arguments[0];
    if (cache[key]){
      return cache[key];
    }
    else{
      var val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  };
}


var fibonacci = memoizeFunction(function(n){
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

const first = new Date().getTime()
console.log(fibonacci(100)); // 输出354224848179262000000
console.log(`first耗时：${new Date().getTime()-first}ms`)
const second = new Date().getTime()
console.log(fibonacci(100)); // 输出354224848179262000000
console.log(`second耗时：${new Date().getTime()-second}ms`)

```
#javascript