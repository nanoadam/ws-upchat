const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema({
  users: [
    { type: { type: mongoose.Types.ObjectId, ref: "user" }, required: true },
  ],
  chats: [
    {
      sender: { type: String },
      message: { type: String },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("chat", ChatSchema);
