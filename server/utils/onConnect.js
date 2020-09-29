const { ChatMessage } = require("./chat-msg");

const onConnect = (socket) => {
  console.log("User");

  socket.on("msg", ({ msg, sender }) => {
    console.log(`User ${sender} sent a message with ${msg}`);
    socket.emit("new-msg", ChatMessage(sender, msg, Date.now()));
  });
};

module.exports = onConnect;
