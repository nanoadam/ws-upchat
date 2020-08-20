<template>
  <h1>Login Page {{ name }}</h1>
</template>

<script>
import { useState } from 'vuex-composition-helpers/dist';
export default {
  setup() {
    const { name } = useState(['name']);
    console.log('helo');

    return { name };
  },
};
</script>

<style></style>
