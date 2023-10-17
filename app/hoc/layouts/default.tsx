import Navigation from "~/components/navigation/navigation";
import Footer from "~/components/footer/footer";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Partial<Props>): ReactNode {
  return (
    <div
      className={
        "flex flex-col min-h-screen grow-1 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-yellow-900 via-violet-500 to-lime-200"
      }
    >
      <Navigation />
      <main className={"m-auto max-w-7xl"}>{children}</main>
      <Footer />
    </div>
  );
}
