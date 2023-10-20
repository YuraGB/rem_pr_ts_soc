import type { MetaFunction } from "@remix-run/node";
import type { ReactElement } from "react";
import DefaultLayout from "~/hoc/layouts/default";
import { useSocket } from "~/components/socetIo/useSocket";
import { wsContext } from "~/components/socetIo/socet.context";
import Chatroom from "~/components/chatRoom/chatroom";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Chat" },
    { name: "description", content: "Welcome to Chat!" },
  ];
};

export default function Chat(): ReactElement {
  const socket = useSocket();
  return (
    <DefaultLayout>
      <wsContext.Provider value={socket}>
        <Chatroom />
      </wsContext.Provider>
    </DefaultLayout>
  );
}
