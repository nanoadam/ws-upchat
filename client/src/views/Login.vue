<template>
  <div class="card">
    <h3>Login</h3>

    <div v-if="alerts">
      <div class="alert" v-for="alert in alerts" :key="alert.msg">
        {{ alert.msg }}
      </div>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="email" />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="text" v-model="password" />
    </div>

    <button @click.prevent="login">Login</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const store = useStore();

    const alerts = computed(() => store.getters['alert/allAlerts']);

    async function login() {
      await store.dispatch('auth/login', {
        email: email.value,
        password: password.value,
      });
    }

    return { email, password, login, alerts };
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
