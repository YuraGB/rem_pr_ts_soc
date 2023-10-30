import type { ReactElement } from "react";
import { NavLink } from "@remix-run/react";

export default function ErrorConnection(): ReactElement {
  return (
    <section
      className={
        "grid grid-cols-1 grid-rows-3 content-center self-center align-top"
      }
    >
      <h1>Sorry, there have been connection error</h1>
      <p>
        You can wait until connection will resume or{" "}
        <NavLink to="/" prefetch="intent" className={"underline"}>
          go to the home page
        </NavLink>
      </p>
    </section>
  );
}
