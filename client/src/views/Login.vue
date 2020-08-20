<template>
  <div class="card">
    <h3>Login</h3>
    <label>Email</label>
    <input type="text" v-model="email" />
    <br />
    <label>Password</label>
    <input type="text" v-model="password" />
    <br />
    <button @click.prevent="login">Login</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'vuex';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const { login } = mapActions(['login']);

    return { name, email, password, login };
  },
};
</script>

<style></style>
