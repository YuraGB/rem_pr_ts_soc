import { NavLink, useOutletContext } from "@remix-run/react";
import type { ReactElement } from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tooltip,
} from "@nextui-org/react";
import Logo from "./assets/2275491.png";
import { useNavigation } from "~/components/navigation/useNavigation";

export default function Navigation(): ReactElement {
  const { isUser, getStyles } = useNavigation();
  return (
    <header className={"w-full p-4"}>
      <Navbar className={"w-full"} maxWidth={"full"}>
        <NavbarBrand>
          <NavbarItem>
            <NavLink to="/" prefetch="intent">
              <Tooltip content="Home">
                <Image
                  isBlurred
                  width={50}
                  src={Logo}
                  alt="NextUI Album Cover"
                  className={"m-2"}
                />
              </Tooltip>
            </NavLink>
          </NavbarItem>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4 content-center w-full"
          justify={"end"}
        >
          <NavbarItem>
            <NavLink to="/chat" prefetch="intent" className={getStyles}>
              chat
            </NavLink>
          </NavbarItem>
          {!isUser ? (
            <>
              <NavbarItem>
                <NavLink to="/login" prefetch="intent" className={getStyles}>
                  login
                </NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink
                  to="/registration"
                  prefetch="intent"
                  className={getStyles}
                >
                  registration
                </NavLink>
              </NavbarItem>
            </>
          ) : (
            <NavbarItem>
              <NavLink prefetch="none" className={getStyles} to={"/logout"}>
                logout
              </NavLink>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>
    </header>
  );
}
