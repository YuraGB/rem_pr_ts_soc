import type { ReactElement } from "react";
import HistoryContainer from "~/components/chatRoom/components/playground/historyContainer/historyContainer";
import { useChatroom } from "~/components/chatRoom/useChatroom";
import InputMessage from "~/components/chatRoom/components/input/inputMessage";
import Toolbar from "~/components/chatRoom/components/toolbar/toolbar";

export default function Chatroom(): ReactElement {
  const { onSend } = useChatroom();
  return (
    <>
      <article
        className={
          " grid-cols-[1fr_minmax(200px,_30%)] bg-black bg-opacity-10 text-amber-50 p-2 content-center w-full grid h-full overflow-hidden grid-rows-[1fr] grid-cols-[1fr minmax(100px, 30%)] gap-3"
        }
      >
        <div
          className={
            "bg-black bg-opacity-10 text-amber-50 p-2 content-center w-full grid h-full overflow-hidden grid-rows-[1fr] grid-cols-[1fr minmax(100px, 30%)] gap-3"
          }
        >
          <HistoryContainer />
          <InputMessage onSend={onSend} />
        </div>
        <Toolbar />
      </article>
    </>
  );
}
