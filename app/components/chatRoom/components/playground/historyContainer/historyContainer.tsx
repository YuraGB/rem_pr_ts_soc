import HistoryMessage from "~/components/chatRoom/components/playground/historyContainer/historyMessage";
import type { ReactElement } from "react";
import React, { useEffect, useRef } from "react";
import { useHistoryContainer } from "~/components/chatRoom/components/playground/historyContainer/useHistoryContainer";

const HistoryContainer = (): ReactElement | null => {
  const list = useRef<HTMLUListElement>(null);
  const { chatHistory } = useHistoryContainer();

  useEffect(() => {
    if (list?.current) {
      const heightOfList = list.current.scrollHeight;

      list.current.scrollTo({ top: heightOfList });
    }
  }, [list, chatHistory]);

  if (!chatHistory) {
    return null;
  }

  return (
    <ul
      className={
        "flex flex-col scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-400 overflow-auto h-full border-b-2 border-b-[bisque]"
      }
      ref={list}
    >
      {chatHistory.map((el, i) => (
        <HistoryMessage message={el} key={i} />
      ))}
    </ul>
  );
};

export default React.memo(HistoryContainer);
