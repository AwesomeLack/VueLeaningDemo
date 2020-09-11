# VueLeaningDemo
↓原作者连接↓

* https://www.jianshu.com/p/5d9b341d650f

# 一些小小心得
1.公共的组件(components)都放在component目录下，如本demo的导航栏。

2.路由并不难，在router目录下的index.js文件下定义好路径即可。

3.component既可以是像导航栏这样的小组件，也可以是像APP.vue这样的页面，灵活理解，页面就好构造了。

4.element-ui的默认格式就很好用了(做demo之前，我是完全不懂CSS的。）

5.Vue-Cli文件结构(简单的理解.

    src
      -assets(放图片等资源)
      -component(放组件->*.Vue文件)
      -router(放路由表的文件默认是index.js)
      -App.vue(默认的主界面的组件)
      -main.js(默认的主入口 根实例):疑问->vue是怎么定义main为主入口的。
6.还存在的bug:删除功能，你无论点哪个都是删第一个(offsetParent获取的id对象不对，未想到解决方案。
```js
del (e) {
      var id = e.target.offsetParent.id
      this.peoples.splice(id, 1)
    },
```
