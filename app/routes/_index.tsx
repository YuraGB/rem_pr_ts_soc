import type { MetaFunction } from "@remix-run/node";
import DefaultLayout from "~/hoc/layouts/default";
import type { ReactElement } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index(): ReactElement {
  return (
    <DefaultLayout>
      <h1>Home</h1>
    </DefaultLayout>
  );
}
