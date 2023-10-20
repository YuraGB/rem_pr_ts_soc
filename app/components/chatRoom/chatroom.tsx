import type { ReactElement } from "react";
import { useContext, useEffect } from "react";
import { wsContext } from "~/components/socetIo/socet.context";

export default function Chatroom(): ReactElement {
  let socket = useContext(wsContext);
  useEffect(() => {
    if (!socket) return;

    socket.on("event", (data: any) => {
      console.log(data);
    });

    socket.emit("something", "ping");
  }, [socket]);
  return (
    <article
      className={"bg-black bg-opacity-10 text-amber-50 p-2 content-center"}
    >
      <h4
        onClick={() => {
          socket?.emit("something", { name: "world" });
        }}
      >
        Chat room
      </h4>
    </article>
  );
}
