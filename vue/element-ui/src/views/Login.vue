<template>
    <div class="login">
        <div class="login-wrap">
            <div class="item">
                <span>账号：</span>
                <input type="text" v-model="account">
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="text" v-model="password">
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account: 'admin123',
            password: '123'
        }
    },
    methods: {
        login() {
            // console.log(111);
            //获取用户输入的账号和密码  再发起请求 传给后端
            console.log(this.account, this.password);
            if (this.account === '' && this.password === '') {
                alert('账号或密码不能为空！')
                return
            }

            // console.log(this.$router);
            // 用js控制路由的跳转
            this.$router.push({ name: 'home', query: { user: this.account } })

            //path/name,hash/query/params
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaa;
    background-image: url(./9df6948b5315e2b98476cd646019da54_preview_mid.jpg);

    .login-wrap {
        width: 400px;
        height: 300px;
        // border: 1px solid #000;
        background: #fff;
        opacity: 0.8;
        border-radius: 10px;
        box-shadow: 0 0 100px #fff;
        padding: 20px;
        // box-sizing: border-box;
        font-size: 30px;

        .item {
            display: flex;
            margin-top: 40px;

            input {
                flex: 1;
                padding: 0 5px;
                font-size: 20px;
            }

            button {
                width: 200px;
                height: 40px;
                font-size: 26px;
                border-radius: 30px;
                border: none;
                margin: 0 auto;
                background: rgb(82, 195, 239);
                color: #fff;
                cursor: pointer;
            }
        }

    }
}
</style>