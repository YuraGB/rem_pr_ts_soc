import type { ReactElement } from "react";
import React from "react";
import { ChatUsers } from "~/components/chatRoom/useChatroom";

const Toolbar = ({ users }: { users: ChatUsers[] }): ReactElement | null => {
  if (!users) {
    return null;
  }
  return (
    <section className={"flex flex-col"}>
      <h4>Users</h4>
      {users.map((user, i) => (
        <p key={i}>{user.name}</p>
      ))}
    </section>
  );
};

export default React.memo(Toolbar);
