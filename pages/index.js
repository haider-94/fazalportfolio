import Portfolio from "@/components/container/portfolio";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Portfolio />
    </main>
  );
}
