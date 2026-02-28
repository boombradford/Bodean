import { motion } from 'framer-motion'

export function StlBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      style={{
        position: 'relative',
        zIndex: 2,
        marginTop: 'clamp(1.5rem, 4vw, 3rem)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: 'var(--cardinals-red)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ height: 1, background: 'var(--cardinals-red)', opacity: 0.5, display: 'block' }}
        />
        STL Made
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ height: 1, background: 'var(--cardinals-red)', opacity: 0.5, display: 'block' }}
        />
      </div>
    </motion.div>
  )
}

export function ArtistHeader() {
  const letters = 'Bo Dean'.split('')

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        marginTop: '0.5rem',
      }}
    >
      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(3.5rem, 14vw, 7rem)',
          letterSpacing: '0.12em',
          lineHeight: 0.9,
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.25 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{
          fontSize: '0.75rem',
          fontWeight: 300,
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
        }}
      >
        Saint Louis, Missouri
      </motion.p>
    </motion.header>
  )
}
