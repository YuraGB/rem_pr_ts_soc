import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/servises/auth";
import { saveNewUser } from "~/servises/user";

export const actionHandler: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return json<string>("Please provide correct information");
  }

  const newUser = await saveNewUser({
    name,
    email,
    password,
  });

  if (!newUser) {
    return json<string>("There is an error. New user wasn't created");
  }

  try {
    return authenticator.authenticate("form", request, {
      successRedirect: "/chat",
      context: { formData: form },
    });
  } catch (e) {
    return json<string>("There is an error. New user wasn't created");
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};
