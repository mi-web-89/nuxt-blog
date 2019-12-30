<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <validation-observer v-slot="{ passes }">
        <form @submit.prevent="passes(onSubmit)">
          <!-- <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput> -->
          <!-- <AppControlInput type="password" v-model="password">Password</AppControlInput> -->
          <TextInput rules="required|email" label="Email Address" name="email" />
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
      </validation-observer>
    </div>
  </div>
</template>

<script>
// import { ValidationObserver } from "vee-validate";
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import TextInput from "@/components/controls/TextInput";


export default {
  name: "AdminAuthPage",
  layout: "admin",
  components: {
    AppControlInput,
    AppButton,
    // ValidationObserver,
    TextInput
  },
  data() {
    return {
      isLogin: true,
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      //----------- no validation ----------
      
      this.$store.dispatch('authUser', {
        email: this.email,
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

