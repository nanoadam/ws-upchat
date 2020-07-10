const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const { ChatMessage } = require("./utils/chat-msg");

const app = express();
app.use(cors());

app.use("/api/auth");

const server = http.createServer(app);

const io = socketio(server);

io.on("connect", (socket) => {
  console.log("User");

  socket.on("msg", (msg) => {
    socket.broadcast.emit("new-msg", ChatMessage("User", msg, Date.now()));
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
