import { useContext, useEffect, useState } from "react";
import { wsContext } from "~/components/socetIo/socet.context";
import type { ChatUsers, RoomData } from "~/components/chatRoom/useChatroom";

export const useToolbar = () => {
  let socket = useContext(wsContext);
  const [users, setUsers] = useState<ChatUsers[]>([]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("roomData", (data: RoomData) => {
      if (data?.users.length) {
        setUsers(data.users);
      }
    });
  }, [socket]);

  return { users };
};
