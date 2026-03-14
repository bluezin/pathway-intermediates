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
          background: `url(${banner}) top center no-repeat`,
          backgroundSize: "cover",
        }}
      ></div>

      <Nav />

      {bannerMain && (
        <div className={styles.hero__main}>
          <h1>Pathway Vs Biometrix</h1>
          <p>
            lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </p>

          <div className={styles.hero__main__buttons}>
            <button className={`button-primary ${styles.button}`}>
              Go to Pathway
            </button>
            <span>or</span>
            <button className={`button-secondary ${styles.button}`}>
              Go to Biometrix
            </button>
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
