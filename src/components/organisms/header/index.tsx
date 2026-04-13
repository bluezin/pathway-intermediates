import Nav from "@/components/organisms/nav";
import styles from "./index.module.css";
import Image from "next/image";

const Header = ({
  banner,
  bannerMain = false,
  title,
}: {
  banner: string;
  bannerMain?: boolean;
  title?: string;
}) => {
  return (
    <section className={styles.header}>
      <div
        className={styles.banner}
        style={{
          background: `url(${banner}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      ></div>

      <Nav />

      {bannerMain && (
        <div className={styles.hero__main}>
          <h1>Pathway Vs BioMatrix</h1>
          <p>
            lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </p>

          <div className={styles.hero__main__buttons}>
            <a
              className={`button-secondary ${styles.button}`}
              href="#pathwayVSbiomatrix"
            >
              Explore
            </a>
          </div>
        </div>
      )}

      {title && (
        <div className={styles.hero__no__main}>
          <h1
            className={styles.hero__no__main__title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Image src="/sub_point.png" alt="sub_point" width={25} height={199} />
        </div>
      )}
    </section>
  );
};

export default Header;
