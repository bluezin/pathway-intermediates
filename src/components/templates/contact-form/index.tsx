/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import Link from "next/link";
import Form from "./components/form";
import { useState } from "react";

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.sub__container} id="contact-form">
        <div className={styles.info}>
          <h3>Getting in touch is easy</h3>
          <p className={styles.informative__text}>
            Curious to hear more about us? Don’t hesitate to fill out the
            contact form and get in touch
          </p>
          <p className={styles.informative__text}>
            Office Address: 3701 Algonquin Rd, Suite 1000, Rolling Meadows, IL
            60008
          </p>

          <p className={styles.informative__text}>Phone: 847-873-1631</p>

          <div className={styles.container__images}>
            <Link
              href={"https://www.facebook.com/Pathway.Intermediates.global/"}
            >
              <img src="/facebook.webp" alt="facebook" />
            </Link>

            <Link
              href={"https://www.linkedin.com/company/pathway-intermediates/"}
            >
              <img src="/linkedin.webp" alt="linkedin" />
            </Link>
          </div>

          <div
            style={{ marginTop: "30px", display: "none" }}
            className={styles.container__send__message}
          >
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className={`button-secondary`}
            >
              Send Message
            </button>
          </div>
        </div>

        <Form open={open} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default ContactForm;
