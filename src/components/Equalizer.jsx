import { useMemo } from 'react'
import { motion } from 'framer-motion'
import styles from './MusicPlayer.module.css'

const BAR_COUNT = 24

export function Equalizer({ isPlaying }) {
  const bars = useMemo(
    () =>
      Array.from({ length: BAR_COUNT }, (_, i) => {
        const center = BAR_COUNT / 2
        const dist = Math.abs(i - center) / center
        const maxH = 1 - dist * 0.6
        return {
          baseHeight: 0.12 + Math.random() * 0.08,
          maxHeight: maxH,
          delay: i * 0.04,
          duration: 0.4 + Math.random() * 0.3,
        }
      }),
    []
  )

  return (
    <div className={styles.equalizer}>
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className={styles.eqBar}
          animate={
            isPlaying
              ? {
                  scaleY: [
                    bar.baseHeight,
                    bar.maxHeight,
                    bar.baseHeight * 1.5,
                    bar.maxHeight * 0.7,
                    bar.baseHeight,
                  ],
                  opacity: [0.4, 1, 0.6, 0.9, 0.4],
                }
              : { scaleY: bar.baseHeight, opacity: 0.2 }
          }
          transition={
            isPlaying
              ? {
                  duration: bar.duration,
                  repeat: Infinity,
                  delay: bar.delay,
                  ease: 'easeInOut',
                }
              : { duration: 0.4, ease: 'easeOut' }
          }
          style={{ height: 28 }}
        />
      ))}
    </div>
  )
}
