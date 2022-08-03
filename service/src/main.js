const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
});

const PORT = 5050;

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('message', (message) => {
    io.emit('message', `${message}`);
  })
});

http.listen(PORT, () => console.log(`server is running on port ${PORT}`));