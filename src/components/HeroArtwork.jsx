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
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={styles.artworkFrame}
        animate={
          isPlaying
            ? {
                boxShadow: [
                  '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06), 0 0 80px rgba(196,30,58,0.15), 0 0 30px rgba(196,30,58,0.08)',
                  '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06), 0 0 100px rgba(196,30,58,0.22), 0 0 50px rgba(196,30,58,0.12)',
                  '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06), 0 0 80px rgba(196,30,58,0.15), 0 0 30px rgba(196,30,58,0.08)',
                ],
              }
            : {
                boxShadow:
                  '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06), 0 0 60px rgba(196,30,58,0.12)',
              }
        }
        transition={
          isPlaying
            ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4 }
        }
        whileHover={{ scale: 1.02 }}
      >
        {/* Blur placeholder */}
        <img
          src={BLUR_PLACEHOLDER}
          alt=""
          aria-hidden="true"
          className={`${styles.placeholder} ${loaded ? styles.placeholderHidden : ''}`}
        />

        {/* Main image with WebP + PNG fallback */}
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
