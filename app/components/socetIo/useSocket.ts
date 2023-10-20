import { useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { connect } from "~/components/socetIo/ws.client";
// @ts-ignore
import type { DefaultEventsMap } from "socket.io/dist/typed-events";
import type { ReservedOrUserListener } from "@socket.io/component-emitter";

export const useSocket = () => {
  let [socket, setSocket] =
    useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    let connection = connect();
    setSocket(connection);
    return () => {
      connection.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("event", (data: ReservedOrUserListener<any, any, any>): void => {
      console.log(data);
    });
  }, [socket]);

  return socket;
};
