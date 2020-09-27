<template>
  <div>
    <h1>Welcome to Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>
    <div v-if="chats">
      <h4 v-for="chat in chats" v-bind:key="chat.time">
        {{ chat.msg }}
      </h4>
    </div>

    <input type="text" v-model="chatInput" />
    <button @click="onSend">Send</button>
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
      chats.push(msg);
    });

    const onSend = () => {
      socket.emit("msg", chatInput.value);
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

<style></style>
