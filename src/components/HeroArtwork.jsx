import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './HeroArtwork.module.css'

const BLUR_PLACEHOLDER =
  'data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACwBACdASogACAAPzmSxFevKqgjqAqp4CcJaQABARuXiwANclcGG7jWstPQedAAAPb7tmsfqXhL0tANRLUq0Yrz12zdm4r9Zfxp5fZfsPj840KwNSHpEmiOEjZWMx01Nb19ouhebbFYAAAA'

export function HeroArtwork({ isPlaying }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.section
      className={styles.artworkSection}
      initial={{ opacity: 0, scale: 0.88, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 16, delay: 1.2 }}
    >
      <motion.div
        className={styles.artworkFrame}
        animate={
          isPlaying
            ? {
                boxShadow: [
                  '0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(196,30,58,0.15), 0 0 30px rgba(196,30,58,0.1)',
                  '0 20px 60px rgba(0,0,0,0.5), 0 0 120px rgba(196,30,58,0.28), 0 0 60px rgba(196,30,58,0.18)',
                  '0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(196,30,58,0.15), 0 0 30px rgba(196,30,58,0.1)',
                ],
              }
            : {
                boxShadow:
                  '0 20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(196,30,58,0.1)',
              }
        }
        transition={
          isPlaying
            ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            : { type: 'spring', stiffness: 100, damping: 20 }
        }
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={BLUR_PLACEHOLDER}
          alt=""
          aria-hidden="true"
          className={`${styles.placeholder} ${loaded ? styles.placeholderHidden : ''}`}
        />
        <picture>
          <source srcSet="/cover.webp" type="image/webp" />
          <motion.img
            src="/cover-opt.png"
            alt="Bo Dean — Album Cover"
            className={styles.coverImage}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            animate={
              isPlaying
                ? { filter: ['brightness(1)', 'brightness(1.08)', 'brightness(1)'] }
                : { filter: 'brightness(1)' }
            }
            transition={
              isPlaying
                ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                : {}
            }
          />
        </picture>
      </motion.div>
    </motion.section>
  )
}
