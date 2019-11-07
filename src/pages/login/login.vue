<template>
  <div class="login">
    <div class="wel">Welcome</div>
    <form>
      <div>
        <Input prefix="ios-contact" v-model="user.userName" class="input" placeholder="请输入账号" />
        <Input
          prefix="ios-lock-outline"
          type="password"
          v-model="user.password"
          class="input input2"
          placeholder="请输入密码"
        />
        <Button id="btn" type="primary" @click="login" style>登 录</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from "@/api/api";
import { log } from 'util';
export default {
  data() {
    return {
      user: {
        userName: "admin",
        password: "12345678"
      }
    };
  },
  methods: {
    login() {
      if (this.user.userName.trim() === "") {
        this.$message.error("请输入用户名");
        return false;
      }
      if (this.user.password.trim() === "") {
        this.$message.error("请输入密码");
        return false;
      }
      login(this.user).then(res =>{
        this.$message.success(res.message)
        setTimeout(() => {
          this.$router.push('/home')
        }, 1000);
      })
    }
  }
};
</script>

<style lang='less' scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, #68cab7, #3577cd);
  .wel {
    font-size: 46px;
    color: #fff;
    margin-top: 80px;
    text-align: center;
    font-weight: normal;
  }
}
</style>