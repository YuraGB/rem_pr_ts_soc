import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { SendIcon } from "~/components/chatRoom/components/input/sendIcon";

const InputMessage = ({ onSend }: { onSend: (arg: string) => void }) => {
  const [message, setMessage] = useState<string>("");
  const onClick = () => {
    if (message) {
      onSend(message);
      setMessage("");
    }
  };

  // @ts-ignore
  const onEnter = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.code === "Enter") {
      onClick();
    }
  };

  return (
    <section className={"flex items-end"}>
      <Input
        variant={"underlined"}
        label={"Message"}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onKeyDown={onEnter}
      />
      <Button
        onClick={onClick}
        isIconOnly={true}
        className={"pe-4 pl-4 w-[60px]"}
      >
        <SendIcon />
      </Button>
    </section>
  );
};

export default React.memo(InputMessage);
