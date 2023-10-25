import { useContext, useEffect, useState } from "react";
import { wsContext } from "~/components/socetIo/socet.context";
import type { Message } from "~/components/chatRoom/useChatroom";

export const useHistoryContainer = () => {
  let socket = useContext(wsContext);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("chatHistory", (data: Message[]) => {
      setChatHistory(data);
    });

    socket.on("updateChatHistory", (data: Message[]) => {
      setChatHistory((state) => {
        const newMessages = data.filter(({ id }) => {
          if (state.length) {
            return !state.find((el) => el.id === id);
          }
          return true;
        });

        return state.concat(...newMessages);
      });
    });
  }, [socket]);

  return { chatHistory };
};
