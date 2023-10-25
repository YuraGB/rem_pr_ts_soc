import type { ReactElement } from "react";
import HistoryContainer from "~/components/chatRoom/components/playground/historyContainer/historyContainer";

export default function GlobalWindow(): ReactElement {
  return (
    <section
      className={"bg-black bg-opacity-10 text-amber-50 p-2 content-center"}
    >
      <HistoryContainer />
    </section>
  );
}
