import { useOutletContext } from "@remix-run/react";
import type { User } from ".prisma/client";

type getStylesFunction =
  | string
  | ((props: { isActive: boolean; isPending: boolean }) => string | undefined)
  | undefined;

export const useNavigation = () => {
  const user: User = useOutletContext();
  const getStyles: getStylesFunction = ({ isActive, isPending }): string => {
    let linkStyles: string =
      "p-2 bg-white rounded-sm hover:shadow-md mx-2 shadow-lg";
    if (isActive) {
      return (linkStyles += " decoration-solid underline shadow-md ");
    }

    return linkStyles;
  };

  const isUser = user && Object.keys(user).length > 0;

  return {
    isUser,
    getStyles,
  };
};
