import type {
  ActionFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import type { ReactElement } from "react";
import DefaultLayout from "~/hoc/layouts/default";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Form, Link } from "@remix-run/react";
import { authenticator } from "~/servises/auth";
import { loginActionHndler } from "~/routes/login/actionHandler";
import { json, redirect } from "@remix-run/node";
import { sessionStorage } from "~/servises/session";
import { useLogin } from "~/routes/login/useLogin";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Login" },
    { name: "description", content: "Welcome to login page!" },
  ];
};

export default function Login(): ReactElement {
  const { errors } = useLogin();
  return (
    <DefaultLayout>
      <article
        className={
          "flex w-96 max-w-full  min-w-unit-6 drop-shadow-sm max-h-full content-center m-auto"
        }
      >
        <section className={"p-4 w-full flex flex-col bg-white"}>
          <h4 className={"mb-2"}>Login form</h4>
          {errors?.length
            ? errors.map((er, ind) => (
                <p key={er + ind} className={"text-red-700 mb-2"}>
                  {er}
                </p>
              ))
            : null}
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

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);
  if (user) {
    return redirect("/chat");
  }

  let session = await sessionStorage.getSession(request.headers.get("cookie"));
  let error = session.get(authenticator.sessionErrorKey);
  return json({ error });
}
