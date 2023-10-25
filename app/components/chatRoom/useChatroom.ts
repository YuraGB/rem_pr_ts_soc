import { useCallback, useContext, useEffect } from "react";
import { wsContext } from "~/components/socetIo/socet.context";
import type { User } from ".prisma/client";
import { useOutletContext } from "@remix-run/react";

export type Message = {
  user: string;
  createdAt: string;
  message: string;
  id: number;
  email: string;
  isCurrent: boolean;
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
  const user: User = useOutletContext();
  const room = "global_room" as const;

  useEffect(() => {
    if (!socket) {
      return;
    }

    if (!user) {
      return;
    }
    socket.emit("join", { name: user.name, room, email: user.email });
  }, [socket, user]);

  const onSend = useCallback(
    (message: string) => {
      if (socket) {
        socket.emit("new-message", message);
      }
    },
    [socket]
  );

  return {
    onSend,
  };
};
