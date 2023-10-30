import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import type { ReactElement } from "react";
import DefaultLayout from "~/hoc/layouts/default";
import { Form } from "@remix-run/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { authenticator } from "~/servises/auth";
import { actionHandler } from "~/routes/registration/actionHandler";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Registration" },
    { name: "description", content: "Welcome to registration!" },
  ];
};

export default function Registration(): ReactElement {
  return (
    <>
      <DefaultLayout>
        <article
          className={
            "flex w-96 max-w-full  min-w-unit-6 drop-shadow-sm max-h-full content-center m-auto"
          }
        >
          <section className={"p-4 w-full flex flex-col"}>
            <h4 className={"mb-2"}>Registration form</h4>
            <Form className={"flex flex-col"} method={"post"}>
              <Input
                isRequired
                type="name"
                name={"name"}
                label="Name (nickname)"
                className={"mb-4"}
              />
              <Input
                isRequired
                type="email"
                label="Email"
                name={"email"}
                className={"mb-4"}
              />
              <Input
                isRequired
                type="password"
                name={"password"}
                label="Password"
                className={"mb-2"}
              />
              <Button
                variant={"faded"}
                className={"self-center mt-2"}
                type={"submit"}
              >
                Submit
              </Button>
            </Form>
          </section>
        </article>
      </DefaultLayout>
    </>
  );
}

export const action: ActionFunction = actionHandler;

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};
