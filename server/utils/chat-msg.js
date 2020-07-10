const moment = require("moment");

function ChatMessage(sender, msg, time) {
  return {
    sender: sender,
    msg: msg,
    time: moment().format("h:mm a"),
  };
}

module.exports = {
  ChatMessage,
};
