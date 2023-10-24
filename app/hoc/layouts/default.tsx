import Navigation from "~/components/navigation/navigation";
import Footer from "~/components/footer/footer";
import React, { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Partial<Props>): ReactNode {
  return (
    <div
      className={
        "max-h-screen overflow-hidden flex flex-col min-h-screen grow-1 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-yellow-900 via-violet-500 to-lime-200"
      }
    >
      <Navigation />
      <main
        className={
          "m-auto max-w-7xl w-full grid justify-center grow grid-cols-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-400"
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
