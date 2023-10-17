import { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/server/auth";

export const loginActionHndler: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("form", request, {
    successRedirect: "/chat",
    failureRedirect: "/login",
  });
};
