<template>
  <div>
    <h1>Welcome to Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const user = computed(() => store.getters["auth/user"]);

    return {
      user,
    };
  },
};
</script>

<style></style>
