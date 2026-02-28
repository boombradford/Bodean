import { useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, RotateCw, Volume2 } from 'lucide-react'
import { Equalizer } from './Equalizer'
import styles from './MusicPlayer.module.css'

export function MusicPlayer({
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onSeek,
  onRewind,
  onForward,
  onVolumeChange,
  formatTime,
}) {
  const progressRef = useRef(null)

  const handleProgressClick = useCallback(
    (e) => {
      const rect = progressRef.current.getBoundingClientRect()
      const pct = (e.clientX - rect.left) / rect.width
      onSeek(Math.max(0, Math.min(1, pct)))
    },
    [onSeek]
  )

  const handleTouch = useCallback(
    (e) => {
      const touch = e.touches[0]
      const rect = progressRef.current.getBoundingClientRect()
      const pct = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width))
      onSeek(pct)
    },
    [onSeek]
  )

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <motion.section
      className={styles.playerSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={styles.playerCard}
        whileHover={{ borderColor: 'rgba(0,0,0,0.15)' }}
      >
        {/* Track Info */}
        <div className={styles.trackInfo}>
          <motion.div
            className={styles.trackTitle}
            animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            STL Made Ya
          </motion.div>
          <div className={styles.trackArtist}>Bo Dean</div>
        </div>

        {/* Equalizer Visualizer */}
        <Equalizer isPlaying={isPlaying} />

        {/* Progress Bar */}
        <div className={styles.progressGroup}>
          <div
            ref={progressRef}
            className={styles.progressContainer}
            onClick={handleProgressClick}
            onTouchStart={handleTouch}
            onTouchMove={handleTouch}
          >
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.timeDisplay}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <motion.button
            className={styles.btnControl}
            onClick={onRewind}
            title="Rewind 10s"
            whileHover={{ scale: 1.15, color: 'var(--text-primary)' }}
            whileTap={{ scale: 0.9, rotate: -20 }}
          >
            <RotateCcw size={20} />
          </motion.button>

          <motion.button
            className={styles.btnPlay}
            onClick={onTogglePlay}
            title="Play / Pause"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  className={styles.iconWrap}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause size={24} fill="currentColor" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  className={styles.iconWrap}
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play size={24} fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            className={styles.btnControl}
            onClick={onForward}
            title="Forward 10s"
            whileHover={{ scale: 1.15, color: 'var(--text-primary)' }}
            whileTap={{ scale: 0.9, rotate: 20 }}
          >
            <RotateCw size={20} />
          </motion.button>
        </div>

        {/* Volume */}
        <div className={styles.volumeGroup}>
          <Volume2 size={16} className={styles.volumeIcon} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className={styles.volumeSlider}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
