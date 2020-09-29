<template>
  <div class="container">
    <h1>Welcome to Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>

    <div v-if="chats">
      <h4 v-for="chat in chats" v-bind:key="chat.time">
        {{ chat.sender }} : {{ chat.msg }}
      </h4>
    </div>

    <form @submit.prevent="onSend">
      <input type="text" v-model="chatInput" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script set>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import socket from "@/config/socket.js";
export default {
  setup() {
    const chats = reactive([]);
    const store = useStore();
    const chatInput = ref();

    const user = computed(() => store.getters["auth/user"]);

    socket.on("new-msg", (msg) => {
      console.log(msg);
      chats.push(msg);
    });

    const onSend = () => {
      socket.emit("msg", { msg: chatInput.value, sender: user.value.name });
      chatInput.value = "";
    };

    return {
      user,
      chatInput,
      chats,
      onSend,
    };
  },
};
</script>

<style >
.container {
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
