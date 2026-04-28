import ContactForm from "@/components/templates/contact-form";
import Footer from "@/components/templates/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />

      {router.pathname !== "/" && (
        <>
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}
