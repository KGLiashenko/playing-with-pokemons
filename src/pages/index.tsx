import Head from "next/head";

import Welcome from "@/components/Welcome";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokémon App</title>
        <meta name="description" content="Welcome pokémons fans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Welcome />
    </>
  );
}
