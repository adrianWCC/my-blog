---
title: 关于try catch finally
date: 2020-01-18 14:10:03
tags: [javascript]
categories: [技术]
---

# 关于try catch finally
## try/catch
随着 JS 引入 async/await ，开发者不可避免地会更多使用 try/catch/finally ，本文解释 finally 代码块的一些容易混淆的点。

js引擎使用单线程， 当执行js脚本时一旦发现异常引擎就会报错同时跑出异常结束进程，导致后面的正常代码无法执行。  Try/catch 通常被我们用来包含一块可能会使浏览器报错的代码，使得js引擎在遇到错误的时候可以继续执行后面的代码；
eg： 
```
function example() {
  console.log('start example')
  try {
    console.log('next line will throw error')
    fail()
  }catch(e) {
    console.log('get catch')
  }

  console.log('some code after error codes')
}
example()

```

![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/08DBA8ED-BB47-4383-B799-FBDA93B6F0CE.png)
一旦在try块中遇到错误就会执行catch块；如果不认为throw error 代码将继续往下执行;  当然 如果在catch中人为的throw error。那么后面的代码也不会执行：
```
function example() {
  console.log('start example')
  try {
    console.log('next line will throw error')
    fail()
  }catch(e) {
    throw e
  }

  console.log('some code after error codes')
}
example()

```

![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/60BBEAC4-DDB2-49BA-A465-17E54545F692.png)

## finally
 那finally又是什么呢？
Finally中包含的代码， 无论是否在try块中遇到*错误*或者*return* 都会执行finally中的代码

1. Try中有错误
```
function example() {
  console.log('start example')
  try {
    console.log('next line will throw error')
    fail()
  }catch(e) {
    
  }finally {
    console.log('finally!!!')
  }

  console.log('some code after error codes')
}
example()

```

![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/E5A4B2D9-7A32-4618-8B7A-16F79C94A2C1.png)

2. Catch 抛出异常
```
function example() {
  console.log('start example')
  try {
    console.log('next line will throw error')
    fail()
  }catch(e) {
    throw e
  }finally {
    console.log('finally!!!')
  }

  console.log('some code after error codes')
}
example()
```
![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/124110F7-A35F-475B-A831-239C8EB1C5B6.png)

3. Try  return
```
function example() {
  console.log('start example')
  try {
    console.log('next line will throw error')
    return
  }catch(e) {
    
  }finally {
    console.log('finally!!!')
  }

  console.log('some code after error codes')
}
example()
```

![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/6F6C08D7-6675-47CD-BB0C-E46AB5B94D8C.png)
结论：
在try/catch/finally  无论在try/catch中执行了什么代码 ， finally中的代码永远都会被执行；
#javascript#