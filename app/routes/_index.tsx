import type { MetaFunction } from "@remix-run/node";
import DefaultLayout from "~/hoc/layouts/default";
import type { ReactElement } from "react";
import { HomePage } from "~/components/homePageComponent/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index(): ReactElement {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
