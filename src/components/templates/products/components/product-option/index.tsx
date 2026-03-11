/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";

interface Content {
  title?: string;
  description?: string;
  img?: string;
  list?: string[];
  id: string;
}

const ProductOptions = ({
  item,
}: {
  item: {
    subTitle: string;
    imgForTitle: string;
    linkVideo?: string;
    content: Content[];
  };
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.nav}>
        <img src={item.imgForTitle} alt="product-option-imgForTitle" />
        <p>{item.subTitle}</p>
      </div>

      {item.linkVideo && (
        <div className={styles.container__video}>
          <p className={styles.divider}></p>

          <iframe
            width="100%"
            height="618px"
            className={styles.video}
            src={item.linkVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <p className={styles.divider}></p>
        </div>
      )}

      {item.content.map((data) => (
        <div className={styles.content} key={data.id}>
          {data.title && (
            <p
              dangerouslySetInnerHTML={{ __html: data.title }}
              className={styles.content__title}
            />
          )}
          {data.description && (
            <p
              dangerouslySetInnerHTML={{ __html: data.description }}
              className={styles.content__description}
            />
          )}
          {data?.img && <img src={data.img} alt="info" />}
          {data?.list && (
            <ul className={styles.content__list__container}>
              {data.list?.map((listItem, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: listItem }}
                />
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductOptions;
