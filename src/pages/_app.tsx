import PaginationContextProvider from "@/store/pagination-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <PaginationContextProvider>
        <Component {...pageProps} />
      </PaginationContextProvider>
    </main>
  );
}
