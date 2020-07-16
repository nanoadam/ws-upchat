const { ChatMessage } = require("./chat-msg");

const onConnect = (socket) => {
  console.log("User");

  socket.on("msg", (msg) => {
    socket.broadcast.emit("new-msg", ChatMessage("User", msg, Date.now()));
  });
};

module.exports = onConnect;
