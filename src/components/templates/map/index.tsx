import styles from "./index.module.css";
import { locationSvg } from "../../../../public/images/svg";

const MapTemplate = () => {
  return (
    <>
      <p className={styles.divider}></p>
      <section className={styles.container}>
        <h2>Location</h2>
        <p className={styles.informative__text}>
          {locationSvg()}
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
