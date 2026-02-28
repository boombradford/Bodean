import { motion } from 'framer-motion'
import { GatewayArch } from './StlElements'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      style={{
        position: 'relative',
        zIndex: 3,
        width: '90%',
        maxWidth: 520,
        margin: '2.5rem auto 0',
        padding: '1.5rem 0',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ opacity: 0.4, color: 'var(--cardinals-red)' }}
        >
          <GatewayArch size={20} />
        </motion.div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.85rem',
            letterSpacing: '0.35em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: 'var(--cardinals-red)' }}>314</span> &mdash; Saint Louis Made
        </div>
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          style={{ opacity: 0.4, color: 'var(--cardinals-red)' }}
        >
          <GatewayArch size={20} />
        </motion.div>
      </div>
      <p
        style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          marginTop: '0.5rem',
        }}
      >
        &copy; 2026 Bo Dean. All rights reserved.
      </p>
    </motion.footer>
  )
}
