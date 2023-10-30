import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/login/index";
import { useMemo } from "react";

export const useLogin = () => {
  const dataLoader = useLoaderData<typeof loader>();
  const errors = useMemo(() => {
    const errorArray: string[] = [];
    if (dataLoader?.error) {
      errorArray.push(dataLoader.error.message);
    }

    return errorArray;
  }, [dataLoader?.error]);

  return { errors };
};
