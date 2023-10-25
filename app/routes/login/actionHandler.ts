import type { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/servises/auth";

export const loginActionHndler: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("form", request, {
    successRedirect: "/chat",
    failureRedirect: "/login",
  });
};
