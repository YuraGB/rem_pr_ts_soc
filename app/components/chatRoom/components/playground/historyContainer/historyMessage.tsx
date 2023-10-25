import type { ReactElement } from "react";
import React from "react";
import type { Message } from "~/components/chatRoom/useChatroom";
import type { User } from ".prisma/client";
import { useOutletContext } from "@remix-run/react";

const HistoryMessage = ({
  message,
}: {
  message: Message;
}): ReactElement | null => {
  const currentUser: User = useOutletContext();

  if (!message) {
    return null;
  }
  const { user, createdAt, message: msg, email } = message;
  const isCurrent = currentUser.email === email;

  return (
    <li
      className={`p-2 mb-2 ${
        isCurrent
          ? "mr-2 self-end bg-gradient-to-br from-blue-200 via-blue-400 to-stone-600 rounded-l-medium  rounded-t-medium"
          : "ml-2 self-start bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] rounded-r-medium  rounded-t-medium "
      }`}
    >
      <p className={""}>{msg}</p>
      <small>{user}</small>
      <small>
        <em>{createdAt as string}</em>
      </small>
    </li>
  );
};

export default React.memo(HistoryMessage);
