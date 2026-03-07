import ContactForm from "@/components/templates/contact-form";
import Footer from "@/components/templates/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <ContactForm />
      <Footer />
    </>
  );
}
