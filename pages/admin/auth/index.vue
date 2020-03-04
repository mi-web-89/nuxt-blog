<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <!-- <validation-observer v-slot="{ passes }"> -->
        <!-- <form @submit.prevent="passes(onSubmit)"> -->
        <form @submit.prevent="onSubmit">
          <AppControlInput type="email" v-model="username">E-Mail Address</AppControlInput>
          <AppControlInput type="password" v-model="password">Password</AppControlInput>
          <!-- <TextInput rules="required|phone" v-model="username" label="Phone/Email" name='email/phone' /> -->
          <AppButton type="submit">
            {{ isLogin ? 'Login' : 'Sign Up' }}
          </AppButton>
          <AppButton
            type="button"
            btn-style="inverted"
            style="margin-left: 10px"
            @click="isLogin = !isLogin"
          > Switch to {{ isLogin ? 'Signup' : 'Login' }}
          </AppButton>
        </form>
      <!-- </validation-observer> -->
    </div>
  </div>
</template>

<script>
// import { ValidationObserver } from "vee-validate";
import AppControlInput from "@/components/ui/AppControlInput";
import AppButton from "@/components/ui/AppButton";
import Input from "@/components/controls/Input";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  components: {
    AppControlInput,
    AppButton,
    // ValidationObserver,
    Input
  },
  data() {
    return {
      isLogin: true,
      username: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authUser', {
        email: this.username,
        password: this.password,
        isLogin: this.isLogin
      })
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 320px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

