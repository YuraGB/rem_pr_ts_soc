import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import type { ReactElement } from "react";
import DefaultLayout from "~/hoc/layouts/default";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Form, Link, useActionData } from "@remix-run/react";
import { authenticator } from "~/server/auth";
import { loginActionHndler } from "~/routes/login/actionHandler";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Login" },
    { name: "description", content: "Welcome to login page!" },
  ];
};

export default function Login(): ReactElement {
  const data = useActionData<typeof action>();
  return (
    <DefaultLayout>
      <article
        className={
          "flex w-96 max-w-full  min-w-unit-6 bg-white drop-shadow-sm max-h-full content-center"
        }
      >
        <section className={"p-4 w-full flex flex-col"}>
          <h4 className={"mb-2"}>Login form</h4>
          {data ? (
            <p className={"w-full text-red-700"}>{data as string}</p>
          ) : null}
          <Form className={"flex flex-col"} method={"post"}>
            <Input
              isRequired
              type="email"
              label="Email"
              name={"email"}
              className={"mb-4"}
              required={true}
            />
            <Input
              isRequired
              required={true}
              type="password"
              name={"password"}
              label="Password"
              className={"mb-4"}
            />
            <Button
              variant={"faded"}
              type={"submit"}
              className={"self-center mt-2"}
            >
              Submit
            </Button>
            <Link
              to={"/registration"}
              className={"text-right text-blue-700 hover:underline self-end"}
            >
              registration
            </Link>
          </Form>
        </section>
      </article>
    </DefaultLayout>
  );
}

export const action: ActionFunction = loginActionHndler;

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/login",
  });
};
