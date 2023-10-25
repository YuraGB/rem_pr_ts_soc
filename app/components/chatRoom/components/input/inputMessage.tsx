import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { SendIcon } from "~/components/chatRoom/components/input/sendIcon";
import { useInoutMessage } from "~/components/chatRoom/components/input/useInoutMessage";

const InputMessage = ({ onSend }: { onSend: (arg: string) => void }) => {
  const { onClick, onEnter, inputRef } = useInoutMessage(onSend);

  return (
    <section className={"flex items-end"}>
      <Input
        variant={"underlined"}
        label={"Message"}
        ref={inputRef}
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
