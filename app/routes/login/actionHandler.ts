import { ActionFunction, json } from "@remix-run/node";
import { authenticator } from "~/server/auth";
import { AuthorizationError } from "remix-auth";

export const loginActionHndler: ActionFunction = async ({ request }) => {
  try {
    return await authenticator.authenticate("form", request, {
      successRedirect: "/chat",
      throwOnError: true,
    });
  } catch (error) {
    // caught error is a response and return it or throw it again
    if (error instanceof Response) {
      console.log("response error", Response);
      return json(error);
    }
    if (error instanceof AuthorizationError) {
      // here the error is related to the authentication process
      console.log("AuthorizationError", error.message);
      return json(error.message);
    }
  }

  return null;
};
