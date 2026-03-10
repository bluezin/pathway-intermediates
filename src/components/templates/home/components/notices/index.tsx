/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";

const Notices = () => {
  const noticeNews = [
    {
      id: "1",
      img: "/lee.webp",
      description:
        "Pathway Intermediates Welcomes Pio Lee as Chief Operating Officer",
    },
  ];

  const lastEvents = [
    {
      id: "1",
      img: "/ipe.webp",
      description: "Pathway Intermediates joins IPPE 2026",
    },
    {
      id: "2",
      img: "/ific.webp",
      description: "The International Feed Ingredients Course (iFIC) 2025",
    },
  ];

  const renderItem = (item: {
    id: string;
    img: string;
    description: string;
  }) => {
    return (
      <div key={item.id}>
        <div className={styles.content__container__img}>
          <img src={item.img} alt="lee" />
        </div>

        <p className={styles.description}>{item.description}</p>
      </div>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__nav}>
          <p className={styles.title}>Recent News</p>
          <p className={styles.divider}></p>
        </div>

        <div className={styles.content__container__items}>
          {noticeNews.map((item) => renderItem(item))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.content__nav}>
          <p className={styles.title}>Latest Events</p>
          <p className={styles.divider}></p>
        </div>

        <div className={styles.content__container__items}>
          {lastEvents.map((item) => renderItem(item))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
