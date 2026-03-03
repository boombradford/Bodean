import { motion } from 'framer-motion'
import styles from './ArtistHeader.module.css'

const digits = [
  { char: '3', x: -60, y: 0, delay: 0.3 },
  { char: '1', x: 0, y: -50, delay: 0.45 },
  { char: '4', x: 60, y: 0, delay: 0.6 },
]

export function CelebrationBadge() {
  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 18, delay: 0.1 }}
    >
      <span className={styles.badgeDot} />
      <span className={styles.badgeLabel}>Happy 314 Day</span>
      <span className={styles.badgeDot} />
    </motion.div>
  )
}

export function Hero314() {
  return (
    <div className={styles.heroWrap}>
      <motion.div
        className={styles.heroPulse}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{
          opacity: [0, 0.6, 0.2, 0.3, 0.2],
          scale: [0.4, 1.15, 1, 1.04, 1],
        }}
        transition={{
          duration: 5,
          times: [0, 0.15, 0.3, 0.65, 1],
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      <h1 className={styles.heroNumber}>
        {digits.map(({ char, x, y, delay }) => (
          <motion.span
            key={char}
            className={styles.digit}
            initial={{ opacity: 0, x, y, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 85,
              damping: 10,
              delay,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <motion.div
        className={styles.heroDay}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.85 }}
      >
        <span className={styles.dayLine} />
        DAY
        <span className={styles.dayLine} />
      </motion.div>
    </div>
  )
}

export function ArtistHeader() {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.9 }}
    >
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 1 }}
      >
        Bo Dean Presents:
      </motion.p>
    </motion.header>
  )
}
