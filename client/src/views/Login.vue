<template>
  <div class="card">
    <h3>Login</h3>
    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="email" />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="text" v-model="password" />
    </div>

    <button @click.prevent="login({ email, password })">Login</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const { login } = mapActions(['login']);

    return { name, email, password, login };
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  margin: 1rem auto;
}

@media (max-width: 600px) {
  .card {
    width: 95%;
  }
}
</style>
