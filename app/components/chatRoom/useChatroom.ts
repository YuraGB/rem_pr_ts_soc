import { useCallback, useContext, useEffect, useState } from "react";
import { wsContext } from "~/components/socetIo/socet.context";
import type { User } from ".prisma/client";
import { useOutletContext } from "@remix-run/react";

export type Message = {
  user: string;
  createdAt: string;
  message: string;
};

export type ChatUsers = {
  id: string;
  name: string;
  room: string;
};

export type RoomData = {
  room: string;
  users: ChatUsers[];
};

export const useChatroom = () => {
  let socket = useContext(wsContext);
  let user: User = useOutletContext();
  const room = "global_room" as const;
  const [users, setUsers] = useState<ChatUsers[]>([]);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    if (!user) {
      return;
    }
    console.log(user);
    socket.emit("join", { name: user.name, room });

    socket.on("roomData", (data: RoomData) => {
      if (data?.users.length) {
        setUsers(data.users);
      }
    });

    socket.on("chatHistory", (data: Message[]) => {
      setChatHistory(data);
    });
  }, [socket, user]);

  const onSend = useCallback(
    (message: string) => {
      console.log(socket, "isSocked");
      if (socket) {
        socket.emit("new-message", message);
      }
    },
    [socket]
  );

  return {
    users,
    chatHistory,
    onSend,
  };
};
