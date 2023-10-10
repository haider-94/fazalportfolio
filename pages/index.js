import Portfolio from "@/components/container/portfolio";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Animation from "@/components/background-animation/animation";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam GIll - SSE</title>
        <meta name="description" content="Sam Gill Portfolio" />
      </Head>
      <main className={`${inter.className}`}>
        <Animation />
        <Portfolio />
      </main>
    </>
  );
}
