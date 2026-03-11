import Link from 'next/link'
import styles from './index.module.css'

const Relations = () => {
  return (
      <section className={styles.container}>
        <div className={`${styles.content} ${styles.history}`}>
          <div className={`${styles.history} ${styles.banner}`} />
          <p>Do you want to learn our story?</p>
          <strong>Every great story has a beginning. Ours starts here.</strong>
          <Link className={`button-secondary`} href="/history">
            HISTORY
          </Link>
        </div>

        <div className={styles.content}>
          <div className={`${styles.productList} ${styles.banner}`} />
          <p>Have you seen our products?</p>
          <strong>
            Browse our product range and find the right solution for your needs.
          </strong>
          <Link href={"/products"} className={`button-secondary`}>
            PRODUCT LIST
          </Link>
        </div>

        <div className={`${styles.content} ${styles.species}`}>
          <div className={`${styles.species} ${styles.banner}`} />
          <p>Interested in livestock?</p>
          <strong>
            Helping you achieve better results in livestock farming
          </strong>
          <Link href={"/species"} className={`button-secondary`}>
            SPECIES
          </Link>
        </div>
      </section>
  )
}

export default Relations
