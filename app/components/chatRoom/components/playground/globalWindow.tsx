import type { ReactElement } from "react";
import HistoryContainer from "~/components/chatRoom/components/playground/historyContainer";
import type { Message } from "~/components/chatRoom/useChatroom";

export default function GlobalWindow({
  chatHistory,
}: {
  chatHistory: Message[];
}): ReactElement {
  return (
    <section
      className={"bg-black bg-opacity-10 text-amber-50 p-2 content-center"}
    >
      <HistoryContainer chatHistory={chatHistory} />
    </section>
  );
}
