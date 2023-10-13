import type { ActionFunction, MetaFunction } from "@remix-run/node";
import type { ReactElement } from "react";
import DefaultLayout from "~/hoc/layouts/default";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Chat" },
    { name: "description", content: "Welcome to Chat!" },
  ];
};

export default function Chat(): ReactElement {
  return (
    <DefaultLayout>
      <h1>Welcome to Chat</h1>
    </DefaultLayout>
  );
}

export const action: ActionFunction = () => {
  return "";
};
