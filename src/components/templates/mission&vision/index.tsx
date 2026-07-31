import Image from "next/image";
import styles from "./index.module.css";

const MissionAndVisionTemplate = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.first__content} ${styles.content}`}>
        <h2 className={styles.title}>Our Vision</h2>
        <p className={styles.divider}></p>
        <p className={styles.description}>
          We firmly believe that the future of animal feed additives lies in
          precision solutions. With more target specific products, we can
          improve animal nutrition with lower inclusion levels. This leads to
          cost-savings for producers, while successfully reducing the use of
          antibiotics, and increases the safety for people, animals and the
          environment.
        </p>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.divider}></p>
        <p className={styles.description}>
          We deliver the value-added solution of feeding tomorrow
        </p>

        <section className={styles.container__more__information}>
          <div className={styles.divide__content}>
            <div>
              <div className={styles.polygon}>
                <Image
                  width={400}
                  height={400}
                  src={"/images/mission/polygon1.webp"}
                  alt="polygon mission"
                />
              </div>

              <h3 className={styles.sub__title}>Confidence</h3>
              <p className={styles.sub__text}>
                Pathway Intermediates and its family group have decades of
                experience in the biotechnology and livestock industry. Every
                member of the Pathway Intermediates family is continuously
                expanding their respective businesses in areas such as feed,
                farming, scientific research, and food processing.
              </p>
            </div>

            <Image
              src={"/images/mission/women.webp"}
              alt="women"
              width={500}
              height={600}
              className={styles.women}
            />
          </div>

          <br></br>
          <p className={styles.sub__text}>
            As a result, Pathway family has now grown to hold more than 40
            affiliates, generating a total of 2 billion USD in annual revenue.
            We are committed to share our quality values with both the farmers
            and our consumers, and take pride in providing our utmost confident
            solutions.
          </p>
          <br></br>
          <p className={styles.sub__text}>
            Every solution must go through numerous steps to be introduced into
            the market. In research and analysis centers spread across the globe
            in the United Kingdom, United States, Canada, and South Korea, we
            test our products with chemical, biological, nutritional, and
            veterinary science. Actual effect on animals is then verified
            through research and commercial farms with capacity of more than 135
            million broilers and 30,000 sows. Products are also applied and
            tested in different feeds at 10 feed plants. Every one of our
            products is thoroughly evaluated through these internal verification
            procedures – this is why we are confident when we provide solutions
            to our customers.
          </p>

          <div className={styles.divide__content}>
            <Image
              src="/images/mission/laboratory.webp"
              alt="People who work in a laboratory"
              width={500}
              height={600}
              className={styles.laboratory}
            />
            <div>
              <div className={styles.polygon}>
                <Image
                  src="/images/mission/polygon2.webp"
                  alt="polygon 2"
                  width={400}
                  height={400}
                />
              </div>
              <p className={styles.sub__title}>Quality Management</p>
              <p className={styles.sub__text}>
                E:qual system, Pathway’s quality management program covers all
                raw materials and entire manufacturing process. This strict
                process continues on when products leave our production site,
                delivered to the world and end its shelf life. With this
                comprehensive tracking process, we are able to provide all
                worldwide customers with consistent, high quality and effective
                products.
              </p>
            </div>
          </div>

          <br></br>
          <p className={styles.sub__text}>
            Our high standard of quality management is not only for Pathway
            Intermediates, but all Pathway family follow identical standard for
            seamless quality control. This integrated culture on QA/AC makes all
            feed additives, feed and food products with consistent quality.
          </p>

          <div className={styles.divide__content}>
            <div>
              <div className={styles.polygon}>
                <Image
                  alt="polygon 3"
                  height={400}
                  width={400}
                  src={"/images/mission/polygon3.webp"}
                />
              </div>

              <p className={styles.sub__title}>Research & Development</p>
              <p className={styles.sub__text}>
                Pathway’s every R&D activities starts from listening to our
                customers and we strive to find the best solutions with
                certainty.
              </p>
            </div>

            <Image
              alt="Laboratory equipment"
              height={540}
              width={550}
              src={"/images/mission/laboratory-equipment.webp"}
              className={styles.laboratory__equipment}
            />
          </div>

          <br></br>
          <p className={styles.sub__text}>
            To find certainty in our solution, we actively explore our own R&D
            network which covers from pure science to actual farm application.
            Every metabolic, functional, biochemical pathway of our active
            ingredient revealed through our own and collaborated work with top
            universities and research institutes around the world.
          </p>
        </section>
      </div>
    </section>
  );
};

export default MissionAndVisionTemplate;
