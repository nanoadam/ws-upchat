const { ChatMessage } = require('./chat-msg');

const onConnect = (socket) => {
  console.log('User has joined');

  socket.on('msg', ({ msg, sender }) => {
    console.log(`User ${sender} sent a message with ${msg}`);
    return socket.emit('new-msg', ChatMessage(sender, msg, Date.now()));
  });

  socket.on('disconnect', () => {
    console.log('user has left');
  });
};

module.exports = onConnect;
