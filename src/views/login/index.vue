<template>
    <div class="login-container">
        login
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.login-container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // cover 铺满容器 多余的裁剪 contain 在容器内容完全显示图片
    // 背景图定位 /背景图尺寸
    background:url(../../assets/images/login_bg.jpg)no-repeat center / cover;
}
</style>
