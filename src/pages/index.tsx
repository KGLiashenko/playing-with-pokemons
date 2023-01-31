import Head from "next/head";

import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokémon App</title>
        <meta name="description" content="Playing with pokémons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Welcome />
    </>
  );
}
