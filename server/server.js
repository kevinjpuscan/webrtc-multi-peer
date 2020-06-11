var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(8081);
console.info(`Server running in port: 8081`);

io.on("connection", function(socket) {
  socket.on("join", function(data) {
    socket.room = data.roomId;
    socket.join(data.roomId);
    console.log("New user " + socket.id + " in room:" + data.roomId);
    const sockets = io.of("/").in().adapter.rooms[data.roomId];

    if (sockets.length === 1) {
      socket.emit("init");
    } else {
      io.to(data.roomId).emit(
        "user-joined",
        socket.id,
        sockets.length,
        Object.keys(io.sockets.clients().sockets)
      );
    }
  });

  socket.on("signal", (toId, message) => {
    console.log("signal");
    io.to(toId).emit("signal", socket.id, message);
  });

  socket.on("message", function(data) {
    console.log("message");
    io.to(data.roomId).emit("broadcast-message", socket.id, data);
  });

  socket.on("disconnect", function() {
    if (socket.room) {
      io.to(socket.room).emit("user-left", socket.id);
    }
  });
});
