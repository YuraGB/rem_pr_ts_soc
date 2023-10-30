import { useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { connect } from "~/components/socetIo/ws.client";
// @ts-ignore
import type { DefaultEventsMap } from "socket.io/dist/typed-events";

export const useSocket = () => {
  const [socket, setSocket] =
    useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    let connection = connect();
    setSocket(connection);
    return () => {
      connection.close();
    };
  }, []);

  return socket;
};
