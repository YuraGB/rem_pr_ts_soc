import { addMessage, chatHistory } from "../chatHistory.mjs";
import * as userActions from "../users.mjs";
import { removeUser } from "../users.mjs";

export const socketHandlers = (io) => (socket) => {
  const { addUser, getUsersInRoom } = userActions;

  socket.emit("event", "connected!");
  socket.on("send-message", (data) => {
    socket.broadcast.emit("receive-event", data);
  });

  socket.on("join", ({ name, room }, callback = () => {}) => {
    console.log(name);
    const { error, user } = addUser({ id: socket.id, name, room });
    console.log("join", user, error);

    if (error || !user) return callback(error);

    socket.emit("chatHistory", chatHistory);

    socket.on("new-message", (data) => {
      addMessage(user.name, data);
      io.emit("chatHistory", chatHistory);
    });

    socket.on("disconnect", function () {
      removeUser(socket.id);
    });

    socket.join(user.room);
    socket.join(room);
    // var clients = io.sockets;
    // console.log(clients);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });
};
