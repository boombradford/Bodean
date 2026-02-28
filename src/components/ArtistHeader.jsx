import { motion } from 'framer-motion'
import styles from './ArtistHeader.module.css'

export function StlBadge() {
  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
    >
      <div className={styles.stlPill}>
        <span className={styles.stlLetters}>STL</span>
      </div>
      <div className={styles.badgeText}>
        <motion.span
          className={styles.badgeLine}
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        Made
        <motion.span
          className={styles.badgeLine}
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export function ArtistHeader() {
  const letters = 'Bo Dean'.split('')

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className={styles.name}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className={styles.letter}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.25 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={letter === ' ' ? { whiteSpace: 'pre' } : undefined}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Saint Louis, Missouri
      </motion.p>
    </motion.header>
  )
}
