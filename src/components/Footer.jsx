import { motion } from 'framer-motion'
import { CardinalsSTL } from './StlElements'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 1.6 }}
    >
      <div className={styles.footerInner}>
        <motion.div
          className={styles.logoIcon}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CardinalsSTL size={22} style={{ opacity: 0.35 }} />
        </motion.div>
        <div className={styles.footerText}>
          Happy <span className={styles.red}>314</span> Day, STL
        </div>
        <motion.div
          className={styles.logoIcon}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <CardinalsSTL size={22} style={{ opacity: 0.35 }} />
        </motion.div>
      </div>
      <p className={styles.copyright}>
        &copy; 2026 Bo Dean. All rights reserved.
      </p>
    </motion.footer>
  )
}
