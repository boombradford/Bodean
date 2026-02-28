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

/* ── Cardinal Bird ── more anatomically detailed with crest, wing, tail ── */
export function CardinalBird({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      {/* Body */}
      <path
        d="M50 80C36 78 24 66 24 50C24 38 30 28 40 23C38 20 37 16 38 12L42 14C41 11 42 7 44 5L48 14C49 10 50 6 52 5L56 14C57 7 59 11 58 14L62 12C63 16 62 20 60 23C70 28 76 38 76 50C76 66 64 78 50 80Z"
        stroke={color}
        strokeWidth="1.8"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Crest feathers */}
      <path d="M44 5C44 5 48 2 50 2C52 2 56 5 56 5" stroke={color} strokeWidth="1" opacity="0.5" />
      <path d="M46 8C46 8 49 4 50 4C51 4 54 8 54 8" stroke={color} strokeWidth="0.8" opacity="0.4" />
      {/* Eye ring + eye */}
      <circle cx="42" cy="36" r="5" stroke={color} strokeWidth="1" opacity="0.4" />
      <circle cx="42" cy="36" r="2.5" fill={color} />
      <circle cx="41.5" cy="35.5" r="0.8" fill="var(--bg-primary)" />
      {/* Beak */}
      <path d="M34 42L24 46L34 44Z" fill={color} opacity="0.7" />
      <path d="M34 44L24 46L34 46Z" fill={color} opacity="0.4" />
      {/* Face mask */}
      <path d="M36 38C36 42 34 44 34 44L38 48C42 46 44 42 44 38" stroke={color} strokeWidth="0.8" opacity="0.4" />
      {/* Wing detail */}
      <path
        d="M52 40C58 42 66 48 68 55C70 62 68 68 64 72"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path d="M54 44C58 46 64 52 65 58" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <path d="M52 48C56 50 60 54 62 60" stroke={color} strokeWidth="0.8" opacity="0.3" />
      {/* Tail feathers */}
      <path d="M56 72C60 80 64 88 66 94" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path d="M50 74C52 82 54 90 54 96" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <path d="M44 72C42 80 38 88 36 94" stroke={color} strokeWidth="1.5" opacity="0.5" />
      {/* Feet */}
      <path d="M40 78L38 86L34 88M38 86L40 90" stroke={color} strokeWidth="1" opacity="0.3" />
      <path d="M56 78L58 86L62 88M58 86L56 90" stroke={color} strokeWidth="1" opacity="0.3" />
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

/* ── STL Skyline ── detailed with recognizable buildings + Arch ── */
export function StlSkyline({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none" {...props}>
      {/* Sky gradient */}
      <rect x="0" y="0" width="120" height="60" fill={color} opacity="0.02" />

      {/* Gateway Arch - centerpiece */}
      <path
        d="M56 8C56 8 42 32 42 54H46C46 38 50 22 56 14C62 22 66 38 66 54H70C70 32 56 8 56 8Z"
        fill={color}
        opacity="0.25"
      />

      {/* Metropolitan Square (tallest) */}
      <rect x="18" y="18" width="7" height="38" fill={color} opacity="0.45" />
      <rect x="19" y="20" width="1" height="34" fill={color} opacity="0.15" />
      <rect x="22" y="20" width="1" height="34" fill={color} opacity="0.15" />
      <rect x="18" y="18" width="7" height="2" fill={color} opacity="0.6" />

      {/* One AT&T Center */}
      <rect x="8" y="28" width="8" height="28" fill={color} opacity="0.4" />
      <rect x="9" y="28" width="6" height="1" fill={color} opacity="0.55" />

      {/* Wainwright Building */}
      <rect x="27" y="32" width="6" height="24" fill={color} opacity="0.35" />
      {[34, 37, 40, 43, 46, 49, 52].map((y) => (
        <line key={y} x1="27" y1={y} x2="33" y2={y} stroke={color} strokeWidth="0.3" opacity="0.2" />
      ))}

      {/* Old Courthouse dome */}
      <rect x="35" y="38" width="10" height="18" fill={color} opacity="0.35" />
      <path d="M35 38L40 30L45 38" fill={color} opacity="0.4" />
      <ellipse cx="40" cy="30" rx="2" ry="1.5" fill={color} opacity="0.3" />

      {/* Right side buildings */}
      <rect x="78" y="24" width="8" height="32" fill={color} opacity="0.4" />
      <rect x="79" y="24" width="2" height="30" fill={color} opacity="0.15" />
      <rect x="83" y="24" width="2" height="30" fill={color} opacity="0.15" />

      {/* Busch Stadium hint */}
      <path d="M90 48C90 42 96 38 104 38C112 38 118 42 118 48" stroke={color} strokeWidth="1" opacity="0.3" />
      <rect x="92" y="48" width="24" height="8" fill={color} opacity="0.25" rx="1" />

      {/* Small buildings */}
      <rect x="2" y="42" width="4" height="14" fill={color} opacity="0.3" />
      <rect x="110" y="36" width="5" height="20" fill={color} opacity="0.3" />

      {/* Ground + river */}
      <line x1="0" y1="56" x2="120" y2="56" stroke={color} strokeWidth="1" opacity="0.3" />
      <path d="M0 58C20 57 40 59 60 57C80 59 100 57 120 58" stroke={color} strokeWidth="0.5" opacity="0.15" />
    </svg>
  )
}

/* ── Busch Stadium ── with arches, field, and light towers ── */
export function BuschStadium({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none" {...props}>
      {/* Stadium outer rim */}
      <ellipse cx="50" cy="44" rx="44" ry="14" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.04" />
      {/* Upper deck arches */}
      <path d="M12 38C12 24 28 14 50 14C72 14 88 24 88 38" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Individual arch details along the top */}
      {[20, 28, 36, 44, 52, 60, 68, 76].map((x) => (
        <path key={x} d={`M${x - 3} 36C${x - 3} 32 ${x} 30 ${x + 3} 30C${x + 6} 30 ${x + 6} 32 ${x + 6} 36`} stroke={color} strokeWidth="0.6" opacity="0.3" />
      ))}
      {/* Field (green area hint) */}
      <ellipse cx="50" cy="42" rx="28" ry="8" fill={color} opacity="0.06" />
      {/* Diamond */}
      <path d="M50 34L56 40L50 46L44 40Z" stroke={color} strokeWidth="0.6" opacity="0.25" />
      {/* Light towers */}
      <line x1="14" y1="36" x2="14" y2="10" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="14" cy="8" r="2.5" fill={color} opacity="0.4" />
      <line x1="14" y1="8" x2="10" y2="6" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="14" y1="8" x2="18" y2="6" stroke={color} strokeWidth="0.5" opacity="0.3" />

      <line x1="86" y1="36" x2="86" y2="10" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="86" cy="8" r="2.5" fill={color} opacity="0.4" />
      <line x1="86" y1="8" x2="82" y2="6" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="86" y1="8" x2="90" y2="6" stroke={color} strokeWidth="0.5" opacity="0.3" />
      {/* Scoreboard hint */}
      <rect x="40" y="16" width="20" height="6" rx="1" stroke={color} strokeWidth="0.5" opacity="0.2" />
    </svg>
  )
}

/* ── Union Station ── clock tower and grand hall ── */
export function UnionStation({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      {/* Main building body */}
      <rect x="15" y="45" width="70" height="40" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.06" rx="1" />
      {/* Clock tower */}
      <rect x="40" y="12" width="20" height="33" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.04" />
      {/* Tower spire */}
      <path d="M45 12L50 4L55 12" fill={color} opacity="0.3" />
      <line x1="50" y1="4" x2="50" y2="1" stroke={color} strokeWidth="1" opacity="0.4" />
      {/* Clock face */}
      <circle cx="50" cy="24" r="6" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="20" x2="50" y2="24" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <line x1="50" y1="24" x2="53" y2="26" stroke={color} strokeWidth="0.8" opacity="0.5" />
      {/* Grand hall arched window */}
      <path d="M30 55C30 48 38 42 50 42C62 42 70 48 70 55" stroke={color} strokeWidth="1" opacity="0.35" />
      {/* Entrance arches */}
      {[25, 40, 55, 70].map((x) => (
        <path key={x} d={`M${x} 85L${x} 72C${x} 68 ${x + 5} 66 ${x + 10} 66C${x + 15} 66 ${x + 10} 68 ${x + 10} 72L${x + 10} 85`} stroke={color} strokeWidth="0.6" opacity="0.25" />
      ))}
      {/* Window details */}
      {[20, 30, 40, 50, 60, 70].map((x) => (
        <rect key={x} x={x} y="56" width="4" height="6" stroke={color} strokeWidth="0.4" opacity="0.2" />
      ))}
      {/* Ground */}
      <line x1="8" y1="86" x2="92" y2="86" stroke={color} strokeWidth="0.6" opacity="0.2" />
    </svg>
  )
}

/* ── Delmar Loop / Street Scene ── neon sign + street vibe ── */
export function DelmarLoop({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      {/* Star shape (Walk of Fame star) */}
      <path
        d="M50 10L56 30L78 30L60 42L68 62L50 50L32 62L40 42L22 30L44 30Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Inner star */}
      <path
        d="M50 20L54 32L66 32L56 40L60 52L50 44L40 52L44 40L34 32L46 32Z"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.3"
      />
      {/* Neon sign - "LOOP" */}
      <rect x="25" y="70" width="50" height="16" rx="3" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <text x="50" y="82" textAnchor="middle" fill={color} fontSize="9" fontFamily="'Bebas Neue', sans-serif" letterSpacing="0.2em" opacity="0.6">
        LOOP
      </text>
      {/* Neon glow dots */}
      <circle cx="28" cy="70" r="1" fill={color} opacity="0.3" />
      <circle cx="72" cy="70" r="1" fill={color} opacity="0.3" />
      <circle cx="28" cy="86" r="1" fill={color} opacity="0.3" />
      <circle cx="72" cy="86" r="1" fill={color} opacity="0.3" />
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
  { Component: GatewayArch, position: { top: '6%', left: '3%' }, size: 52, opacity: 0.1 },
  { Component: FleurDeLis, position: { top: '12%', right: '4%' }, size: 40, opacity: 0.08 },
  { Component: BluesNote, position: { top: '40%', left: '1%' }, size: 44, opacity: 0.09 },
  { Component: CardinalBird, position: { top: '50%', right: '2%' }, size: 46, opacity: 0.08 },
  { Component: UnionStation, position: { top: '28%', left: '4%' }, size: 38, opacity: 0.06 },
  { Component: StlSkyline, position: { bottom: '20%', left: '3%' }, size: 72, opacity: 0.07 },
  { Component: BuschStadium, position: { bottom: '30%', right: '3%' }, size: 64, opacity: 0.07 },
  { Component: DelmarLoop, position: { top: '70%', right: '5%' }, size: 36, opacity: 0.06 },
  { Component: GatewayArch, position: { bottom: '8%', left: '8%' }, size: 34, opacity: 0.06 },
  { Component: FleurDeLis, position: { bottom: '5%', right: '7%' }, size: 30, opacity: 0.05 },
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
