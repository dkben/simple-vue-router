<template>
    <div class="tab-bar-view">
        <router-link to='/home'>首頁</router-link>
        <router-link to='/page1'>頁面1</router-link>
        <router-link to='/page2'>頁面2</router-link>
        <router-link to='/page3'>頁面3</router-link>
        <router-link to='/page4'>頁面4</router-link>
        <router-link to='/page5'>頁面5</router-link>
    </div>
</template>

<script>
    export default {
        name: "TabBarView"
    }
</script>

<style scoped>
    .tab-bar-view {
        height: 50px;
    }

    .tab-bar-view a {
        display: inline-block;
        width: 50px;
        text-align: center;
        line-height: 50px;
    }
</style>