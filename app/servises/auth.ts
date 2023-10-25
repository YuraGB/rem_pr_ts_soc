// app/servises/auth.servises.ts
import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session";
import type { User } from ".prisma/client";
import * as process from "process";
import { FormStrategy } from "remix-auth-form";
import { prisma } from "~/servises/prisma";
import bcrypt from "bcryptjs";
const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("No session secret");
}

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
const authenticator: Authenticator<User> = new Authenticator<User>(
  sessionStorage
);

const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  if (!email) {
    console.log("the email is missing");
    throw new AuthorizationError("the email is missing");
  }
  let user = null;
  try {
    user = await prisma.user.findUnique({
      where: { email },
    });
  } catch (e) {
    return user;
  }

  if (!user) {
    console.log("there is no user with such email", "auth servises");
    throw new AuthorizationError("there is no user with such email");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    console.log("the password is wrong");
    throw new AuthorizationError("the password is wrong");
  }

  return user;
});

//@ts-ignore
authenticator.use(formStrategy, "form");

export { authenticator };
