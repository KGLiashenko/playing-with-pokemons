import { useEffect } from "react";
import { useRouter } from "next/router";

import PaginationContextProvider from "@/store/pagination-context";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <PaginationContextProvider>
      <Component {...pageProps} />
    </PaginationContextProvider>
  );
}
