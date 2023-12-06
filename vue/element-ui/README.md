<!-- # element-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->

# 路由传参
1.this.$router.push('/home/${this.account}')
需要在路由配置中声明该路径可以携带参数  '/home/:user'

2.this.$router.push({path:'/home',query:{user:this.account}})
它会将参数以？的形式拼接在url中

3.this.$router.push({path:'/home',params:{user:this.account}})
需要在路由配置中声明该路径可以携带参数  '/home/:user'

4.this.$router.push({path:'/home',hash:{user:this.account}})
参数前面会多一个#

