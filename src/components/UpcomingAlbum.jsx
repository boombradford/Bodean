import { motion } from 'framer-motion'
import styles from './UpcomingAlbum.module.css'

export function UpcomingAlbum() {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 1.6 }}
    >
      <p className={styles.label}>Coming Soon</p>
      <div className={styles.coverWrap}>
        <picture>
          <source srcSet="/cover.webp" type="image/webp" />
          <img
            src="/cover-opt.png"
            alt="Memento Vivere — Upcoming Album"
            className={styles.cover}
            loading="lazy"
          />
        </picture>
      </div>
      <h3 className={styles.title}>Memento Vivere</h3>
      <p className={styles.teaser}>
        New album dropping soon. Stay tuned for more info.
      </p>
    </motion.section>
  )
}
