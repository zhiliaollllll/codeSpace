<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span>选课系统</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        欢迎{{ $route.query.user }}
                    </span>
                    <el-dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item> 修改密码</el-dropdown-item>
                            <el-dropdown-item> 个人详情</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>

                        </el-dropdown-menu>
                    </el-dropdown>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
el-container {
    width: 100vw;
    height: 100vh;

    el-header {
        background: #ea8a8a;
        font-size: 30px;
        line-height: 80px;
        position: relative;
        background-color: var(--el-color-primary-light-7);
        color: var(--el-text-color-primary);
    }
}



.el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}


.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>