import Image from "next/image";
import styles from "./index.module.css";

const MapTemplate = () => {
  return (
    <>
      <p className={styles.divider}></p>
      <section className={styles.container}>
        <h2>Location</h2>
        <p className={styles.informative__text}>
          <Image
            src="/images/location.webp"
            alt="Location pin"
            width={50}
            height={50}
          />
          Office Address: 3701 Algonquin Rd, Suite 1000, Rolling Meadows, IL
          60008
        </p>

        <iframe
          src="https://www.google.com/maps?q=3701+Algonquin+Rd,+Rolling+Meadows,+IL&output=embed"
          loading="lazy"
          title="map"
        />
      </section>
    </>
  );
};

export default MapTemplate;
