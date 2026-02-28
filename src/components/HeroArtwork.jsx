import { motion } from 'framer-motion'

export function HeroArtwork({ isPlaying }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        zIndex: 2,
        width: '90%',
        maxWidth: 520,
        margin: 'clamp(1.5rem, 4vw, 2.5rem) auto 0',
      }}
    >
      <motion.div
        animate={
          isPlaying
            ? {
                boxShadow: [
                  '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), 0 0 160px rgba(196,30,58,0.35), 0 0 60px rgba(196,30,58,0.15)',
                  '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), 0 0 200px rgba(196,30,58,0.45), 0 0 80px rgba(196,30,58,0.2)',
                  '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), 0 0 160px rgba(196,30,58,0.35), 0 0 60px rgba(196,30,58,0.15)',
                ],
              }
            : {
                boxShadow:
                  '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), 0 0 120px rgba(196,30,58,0.35)',
              }
        }
        transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.4 }}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: 16,
          overflow: 'hidden',
        }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img
          src="/cover.png"
          alt="Bo Dean — Album Cover"
          animate={isPlaying ? { filter: ['brightness(1)', 'brightness(1.08)', 'brightness(1)'] } : { filter: 'brightness(1)' }}
          transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </motion.div>
    </motion.section>
  )
}
