import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import type { ReactElement } from "react";
import DefaultLayout from "~/hoc/layouts/default";
import { useSocket } from "~/components/socetIo/useSocket";
import { wsContext } from "~/components/socetIo/socet.context";
import Chatroom from "~/components/chatRoom/chatroom";
import { authenticator } from "~/server/auth";
import { redirect } from "@remix-run/node";

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

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return redirect("/login");
  }
  return "";
}
