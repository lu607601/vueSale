<template>
    <div class="appHead">
        <div class="headNav">
            <ul class="navUl">
                <li class="navLi">{{username}}</li>
                <li class="navLi" v-if="username!==''" @click="exit">退出</li>
                <li class="navLi" v-if="username==''" @click="login">登录</li>
                <li class="navLi" v-if="username==''" @click="register">注册</li>
                <li class="navLi">关于</li>
            </ul>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="headFoot">
        this is footer
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    exit: function () {
      this.username = ''
    },
    login: function () {
      this.username = 'lym'
    },
    register: function () {

    }
  }
}
</script>
<style>
html {
	font-size: 100px;
}
ul, p {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
.headNav {
	width: 100%;
	height: .6rem;
	background-color: #000;
	color: #fff;
	font-size: .16rem;
	overflow: hidden;
}
.navUl {
	float: right;
	height: .6rem;
    margin-right: .2rem;
    margin-top: .17rem;
}
.navUl .navLi {
	display: inline-block;
	cursor: pointer;
}
.container {
    margin: 10px;
}
.headFoot {
	text-align: center;
	font-size: .16rem;
    color: #fff;
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    background: #000;
}
</style>
