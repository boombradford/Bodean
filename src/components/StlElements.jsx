import { motion } from 'framer-motion'
import styles from './StlElements.module.css'

/* ── Gateway Arch ── detailed with reflection, ground, and shading ── */
export function GatewayArch({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      <defs>
        <linearGradient id="archSheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Main arch structure — catenary curve with thickness */}
      <path
        d="M50 6C50 6 18 42 18 86H26C26 84 26.5 78 28 70C31 55 38 32 50 16C62 32 69 55 72 70C73.5 78 74 84 74 86H82C82 42 50 6 50 6Z"
        stroke="url(#archSheen)"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Inner arch opening */}
      <path
        d="M50 16C50 16 30 46 30 86H70C70 46 50 16 50 16Z"
        fill={color}
        opacity="0.06"
      />
      {/* Structural detail lines */}
      <path d="M34 60C40 42 46 28 50 20" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <path d="M66 60C60 42 54 28 50 20" stroke={color} strokeWidth="0.5" opacity="0.3" />
      {/* Foundation base */}
      <rect x="16" y="85" width="14" height="3" rx="0.5" fill={color} opacity="0.4" />
      <rect x="70" y="85" width="14" height="3" rx="0.5" fill={color} opacity="0.4" />
      {/* Ground line with texture */}
      <line x1="10" y1="90" x2="90" y2="90" stroke={color} strokeWidth="0.8" opacity="0.25" />
      <line x1="12" y1="92" x2="88" y2="92" stroke={color} strokeWidth="0.4" opacity="0.12" />
      {/* Ground reflection */}
      <path
        d="M38 90C38 90 44 94 50 94C56 94 62 90 62 90"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.1"
      />
    </svg>
  )
}

/* ── Fleur-de-lis ── traditional STL symbol with proper heraldic detail ── */
export function FleurDeLis({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      <defs>
        <linearGradient id="fleurGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Center petal */}
      <path
        d="M50 8C48 8 44 18 44 30C44 38 46 44 48 47L44 50C44 50 46 52 50 52C54 52 56 50 56 50L52 47C54 44 56 38 56 30C56 18 52 8 50 8Z"
        fill="url(#fleurGrad)"
      />
      {/* Left petal with curl */}
      <path
        d="M44 50C42 48 36 44 28 44C18 44 10 48 8 50C10 52 18 56 28 56C34 56 38 54 41 52C39 56 36 62 34 68L38 70C40 64 44 56 46 52L44 50Z"
        fill="url(#fleurGrad)"
      />
      {/* Right petal with curl */}
      <path
        d="M56 50C58 48 64 44 72 44C82 44 90 48 92 50C90 52 82 56 72 56C66 56 62 54 59 52C61 56 64 62 66 68L62 70C60 64 56 56 54 52L56 50Z"
        fill="url(#fleurGrad)"
      />
      {/* Lower stem with cross-bar */}
      <path
        d="M46 52C46 58 44 66 42 74L46 76L50 92L54 76L58 74C56 66 54 58 54 52"
        fill="url(#fleurGrad)"
      />
      {/* Cross detail bar */}
      <rect x="42" y="72" width="16" height="2" rx="1" fill={color} opacity="0.5" />
      {/* Center jewel */}
      <circle cx="50" cy="50" r="3.5" fill={color} opacity="0.8" />
      <circle cx="50" cy="50" r="2" fill={color} />
    </svg>
  )
}

/* ── Blues/Jazz Note ── trumpet + double notes with staff lines ── */
export function BluesNote({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      {/* Staff lines */}
      {[20, 30, 40, 50, 60].map((y) => (
        <line key={y} x1="5" y1={y} x2="95" y2={y} stroke={color} strokeWidth="0.4" opacity="0.15" />
      ))}
      {/* Double note heads */}
      <ellipse cx="28" cy="72" rx="11" ry="8" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15" transform="rotate(-20 28 72)" />
      <ellipse cx="72" cy="62" rx="11" ry="8" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15" transform="rotate(-20 72 62)" />
      {/* Stems */}
      <line x1="38" y1="67" x2="38" y2="18" stroke={color} strokeWidth="2.5" />
      <line x1="82" y1="57" x2="82" y2="12" stroke={color} strokeWidth="2.5" />
      {/* Beams */}
      <path d="M38 18C38 18 50 12 60 14C70 16 82 12 82 12" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 26C38 26 50 20 60 22C70 24 82 20 82 20" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Decorative flags */}
      <path d="M82 12C82 12 88 16 90 22" stroke={color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      {/* Treble clef hint */}
      <path
        d="M12 35C12 35 16 28 16 40C16 52 10 55 14 48C18 41 14 35 12 35Z"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.3"
      />
    </svg>
  )
}

/* ── Background floating elements ── */
const floatVariants = {
  animate: (i) => ({
    y: [0, -12, 0],
    x: [0, i % 2 === 0 ? 5 : -5, 0],
    rotate: [0, i % 2 === 0 ? 4 : -4, 0],
    transition: {
      duration: 5 + i * 0.7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
}

const stlElements = [
  { Component: GatewayArch, position: { top: '6%', left: '3%' }, size: 52, opacity: 0.15 },
  { Component: FleurDeLis, position: { top: '12%', right: '4%' }, size: 40, opacity: 0.12 },
  { Component: BluesNote, position: { top: '40%', left: '1%' }, size: 44, opacity: 0.13 },
  { Component: FleurDeLis, position: { top: '50%', right: '2%' }, size: 36, opacity: 0.1 },
  { Component: GatewayArch, position: { top: '28%', left: '4%' }, size: 38, opacity: 0.1 },
  { Component: GatewayArch, position: { bottom: '20%', left: '3%' }, size: 42, opacity: 0.08 },
  { Component: BluesNote, position: { bottom: '30%', right: '3%' }, size: 40, opacity: 0.1 },
  { Component: GatewayArch, position: { bottom: '8%', left: '8%' }, size: 34, opacity: 0.1 },
  { Component: FleurDeLis, position: { bottom: '5%', right: '7%' }, size: 30, opacity: 0.08 },
]

export function StlBackground() {
  return (
    <div className={styles.backdrop}>
      {stlElements.map(({ Component, position, size, opacity }, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatVariants}
          animate="animate"
          className={styles.element}
          style={{ ...position, opacity }}
        >
          <Component size={size} />
        </motion.div>
      ))}
    </div>
  )
}
