const express = require("express");
const app = express();
const socketio = require("socket.io");
const PORT = process.env.PORT || "1967";
const http = require("http");

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

server.listen(PORT, () => {
  io.on("connection", socket => {
    console.log(socket.id);
    socket.on("NEW_BOOKMARK_MESSAGE", bookmark => {
      console.log(bookmark);
      socket.broadcast.emit("NEW_BOOKMARK_ADDED", bookmark);

    });
    socket.on("LIKE_AND_FAV", bookmark => {
      console.log(bookmark);
      socket.broadcast.emit("UPDATE_LIKE_AND_FAV", bookmark);

    });
  });
});
