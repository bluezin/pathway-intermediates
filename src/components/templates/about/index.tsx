import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

const AboutTemplate = () => {
  return (
    <>
      <section className={styles.first__container}>
        <h2 className={styles.main__title}>
          We deliver the value-added solutions of feeding tomorrow
        </h2>

        <div className={styles.container__video}>
          <p className={styles.divider__video}></p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nzspfq3bAAE?si=XhmyDumWWPVKqe_q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={styles.video}
          ></iframe>
          <p className={styles.divider__video}></p>
        </div>

        <div className={styles.container__copies}>
          <Image
            src={"/images/polygon.webp"}
            alt="polygon"
            width={100}
            height={100}
            className={styles.polygon}
          />

          <div className={styles.container__first__content}>
            <div>
              <div className={styles.sub__title}>
                <h3>The research-dedicated</h3>
                <h3>animal nutrition company</h3>
              </div>

              <p className={styles.text}>
                Pathway Intermediates, is the global animal nutrition brand,
                dedicated to research and development.
              </p>

              <p className={styles.text}>
                We believe that the future of animal nutrition lies in the
                explanation of critical metabolic pathways and the
                identification of natural products that can modulate these
                systems. All of our products are the result of pure science,
                from which we are able to provide the most optimal and reliable
                solutions for each customer.
              </p>
            </div>

            <Image
              src={"/images/plus.webp"}
              alt="plus"
              width={100}
              height={100}
              className={styles.plus}
            />
          </div>

          <h3 className={styles.sub__title}>With strong R&D capability</h3>
          <p className={styles.text}>
            Pathway’s network of global R&D infrastructure enables full-coverage
            of animal nutrition from molecular biology to industrial level of
            field trials.
          </p>
          <p className={styles.text}>
            Everything we do begins with the customer experience. All our team
            from R&D to sales are always open to new ideas and suggestions from
            customers and partners. Hundreds of R&D experts within our global
            network collaborate constantly to develop novel solutions and verify
            their efficacy.
          </p>

          <p className={styles.text}>
            The two pillars of our R&D network, Pathway Research Centre in the
            United Kingdom and Bio-Resource Institute in South Korea conduct
            diverse research to investigate and develop high value-added
            solutions.
          </p>
          <p className={styles.text}>
            Pathway Research Centre in the United Kingdom focuses on scientific
            investigation including synthetic and analytical chemistry,
            genomics, and microbiology. This broad range of research enables us
            to understand and find solutions at the deepest level of science.
          </p>

          <p className={styles.text}>
            Bio-Resource Institute in South Korea conducts research and analysis
            based on specialized fermentation and microbial technology. Its
            research expertise has been proven by novel solution development and
            patents, reinforcing Pathway’s capability and opportunity to meet
            customers’ needs and demands.
          </p>

          <p className={styles.text}>
            Verification is an essential part of the R&D process. We
            continuously validate our solutions through Pathway family’s
            infrastructure, including 10 feed plants, farms with more than
            30,000 sows, 135 million marketed birds annually, and beef cattle
            farms. This allows comprehensive verification of scientific
            solutions that are truly reliable.
          </p>

          <p className={styles.text}>
            Collaboration with leading Universities and research institutes
            around the world is also core to developing and sharing our
            research.
          </p>
        </div>
      </section>

      <section className={styles.container__members}>
        <div className={styles.sub__container__members}>
          <div>
            <h3 className={styles.members__title}>Pathway Members</h3>
            <p className={styles.members__description}>
              “Pathway Intermediates is the ideal partner to deliver effective
              feed additive solutions to our customers”
            </p>

            <Link href={"/employee-spotlight"} className={styles.members__view}>
              View More Member
              <span>+</span>
            </Link>

            <p className={styles.members__divider}></p>
          </div>

          <div className={styles.members__container__img}>
            <Image
              src="/images/all-members.webp"
              alt="all-members"
              width={300}
              height={300}
              className={styles.all__members}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTemplate;
