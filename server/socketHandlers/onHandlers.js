import { addMessage, chatHistory } from "../chatHistory.mjs";
import * as userActions from "../users.mjs";
import { removeUser, updateHistoryWithCurrentUser } from "../users.mjs";

export const socketHandlers = (io) => (socket) => {
  const { addUser, getUsersInRoom } = userActions;

  socket.emit("connection", "connected!");

  socket.on("join", ({ name, room, email }, callback = () => {}) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    console.log(error);
    if (error || !user) return callback(error);

    socket.emit(
      "chatHistory",
      updateHistoryWithCurrentUser(chatHistory, email)
    );

    socket.on("new-message", (data) => {
      addMessage(user.name, data, email);
      io.emit(
        "updateChatHistory",
        updateHistoryWithCurrentUser(chatHistory, email)
      );
    });

    socket.on("disconnect", function () {
      removeUser(socket.id);
    });

    socket.join(user.room);
    socket.join(room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    socket.emit("joined", true);
    callback();
  });
};
