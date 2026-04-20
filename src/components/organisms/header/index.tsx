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
      {bannerMain ? (
        <div className={styles.banner__main}>
          <Image
            src={"/images/banners/banner-main-part-1.webp"}
            alt="banner-main-part-1"
            width={400}
            height={300}
          />
          <Image
            src={"/images/banners/banner-main-part-2.webp"}
            alt="banner-main-part-1"
            width={400}
            height={300}
            className={styles.banner__main__img__2}
          />
        </div>
      ) : (
        <div
          className={styles.banner}
          style={{
            background: `url(${banner}) center center no-repeat`,
            backgroundSize: "cover",
          }}
        ></div>
      )}

      <Nav />

      {bannerMain && (
        <div className={styles.container__cards}>
          <div className={styles.card}>
            <Image
              src="/images/pathway-logo-2.webp"
              alt="pathway-logo-2"
              width={205}
              height={80}
            />
            <button className={styles.button__pathway}>ENTER SITE</button>
          </div>

          <div className={styles.vs}>
            <p>VS</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/biomatrix-logo.svg"
              alt="pathway-logo-2"
              width={220}
              height={80}
            />
            <button className={styles.button__biomatrix}>ENTER SITE</button>
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
