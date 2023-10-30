import type { Socket } from "socket.io-client";

type ErrorHandler = (
  err: Socket.DisconnectReason | Error,
  cb?: (arg: boolean) => void
) => void;

export const isError: ErrorHandler = (err, cb = (err) => {}): boolean => {
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }
  cb(!!err);

  return true;
};
