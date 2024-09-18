import Header from "@/features/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header logo={<Image src="/box.png" alt="box" width={90} height={50}/>}/>
    <Component {...pageProps} />
    </>
  );
}
