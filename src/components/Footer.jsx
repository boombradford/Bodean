import { motion } from 'framer-motion'
import { GatewayArch } from './StlElements'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <div className={styles.footerInner}>
        <motion.div
          className={styles.archIcon}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GatewayArch size={20} />
        </motion.div>
        <div className={styles.footerText}>
          <span className={styles.red}>314</span> &mdash; Saint Louis Made
        </div>
        <motion.div
          className={styles.archIcon}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <GatewayArch size={20} />
        </motion.div>
      </div>
      <p className={styles.copyright}>
        &copy; 2026 Bo Dean. All rights reserved.
      </p>
    </motion.footer>
  )
}
