import { useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, RotateCw, Volume2 } from 'lucide-react'

const PADDING = 'var(--player-padding)'

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        zIndex: 3,
        width: '90%',
        maxWidth: 520,
        margin: 'clamp(1.5rem, 3vw, 2rem) auto 0',
      }}
    >
      <motion.div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: PADDING,
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
        whileHover={{ borderColor: 'rgba(255,255,255,0.12)' }}
      >
        {/* Track Info */}
        <div style={{ textAlign: 'center', padding: `0 ${PADDING}`, marginBottom: PADDING }}>
          <motion.div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
            }}
            animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            STL Made Ya
          </motion.div>
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              marginTop: '0.15rem',
            }}
          >
            Bo Dean
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ padding: `0 ${PADDING}`, marginBottom: PADDING }}>
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            onTouchStart={handleTouch}
            onTouchMove={handleTouch}
            style={{
              width: '100%',
              height: 4,
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: 2,
              cursor: 'pointer',
              position: 'relative',
              transition: 'height 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.height = '6px')}
            onMouseLeave={(e) => (e.currentTarget.style.height = '4px')}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'var(--cardinals-red)',
                borderRadius: 2,
                width: `${progress}%`,
                position: 'relative',
              }}
              layout
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '0.5rem',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1rem, 4vw, 1.5rem)',
            padding: `0 ${PADDING}`,
          }}
        >
          <motion.button
            onClick={onRewind}
            title="Rewind 10s"
            whileHover={{ scale: 1.15, color: 'var(--text-primary)' }}
            whileTap={{ scale: 0.9, rotate: -20 }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RotateCcw size={20} />
          </motion.button>

          <motion.button
            onClick={onTogglePlay}
            title="Play / Pause"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 56,
              height: 56,
              background: 'var(--cardinals-red)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px var(--cardinals-red-glow)',
              padding: '0.5rem',
            }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex' }}
                >
                  <Pause size={24} fill="currentColor" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex' }}
                >
                  <Play size={24} fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={onForward}
            title="Forward 10s"
            whileHover={{ scale: 1.15, color: 'var(--text-primary)' }}
            whileTap={{ scale: 0.9, rotate: 20 }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RotateCw size={20} />
          </motion.button>
        </div>

        {/* Volume */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            padding: `${PADDING} ${PADDING} 0`,
          }}
        >
          <Volume2 size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="volume-slider"
          />
        </div>
      </motion.div>

      <style>{`
        .volume-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100px;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }
        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: var(--text-secondary);
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;
        }
        .volume-slider::-webkit-slider-thumb:hover {
          background: var(--text-primary);
        }
        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: var(--text-secondary);
          border: none;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </motion.section>
  )
}
