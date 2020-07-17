const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema({
  users: [{ type: String }],
  chats: [
    {
      sender: { type: String },
      message: { type: String },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("chat", ChatSchema);
