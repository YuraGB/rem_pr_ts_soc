import type { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer
      className={"bg-black bg-opacity-10 text-amber-50 p-2 content-center"}
    >
      <span>&copy; copyright</span>
    </footer>
  );
}
