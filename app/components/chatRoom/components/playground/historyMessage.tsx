import type { ReactElement } from "react";
import type { Message } from "~/components/chatRoom/useChatroom";

export const HistoryMessage = ({
  message,
}: {
  message: Message;
}): ReactElement | null => {
  if (!message) {
    return null;
  }

  const { user, createdAt, message: msg } = message;

  return (
    <li>
      <p>{msg}</p>
      <small>{user}</small>
      <small>
        <em>{createdAt as string}</em>
      </small>
    </li>
  );
};
