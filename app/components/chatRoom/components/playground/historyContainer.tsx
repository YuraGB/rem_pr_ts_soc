import { HistoryMessage } from "~/components/chatRoom/components/playground/historyMessage";
import type { ReactElement } from "react";
import React from "react";
import type { Message } from "~/components/chatRoom/useChatroom";

const HistoryContainer = ({
  chatHistory,
}: {
  chatHistory: Message[];
}): ReactElement | null => {
  if (!chatHistory) {
    return null;
  }

  return (
    <ul
      className={
        "scrollbar-thin scrollbar-thumb-fuchsia-900 scrollbar-track-fuchsia-300 overflow-auto h-full border-b-2 border-b-[bisque]"
      }
    >
      {chatHistory.map((el, i) => (
        <HistoryMessage message={el} key={i} />
      ))}
    </ul>
  );
};

export default React.memo(HistoryContainer);
