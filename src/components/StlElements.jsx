import { motion } from 'framer-motion'

export function GatewayArch({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 8C50 8 20 45 20 85H30C30 55 40 30 50 18C60 30 70 55 70 85H80C80 45 50 8 50 8Z"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />
      <line x1="15" y1="85" x2="85" y2="85" stroke={color} strokeWidth="2" opacity="0.5" />
    </svg>
  )
}

export function FleurDeLis({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color} {...props}>
      <path d="M50 5C50 5 42 20 42 35C42 42 45 48 50 50C55 48 58 42 58 35C58 20 50 5 50 5Z" opacity="0.9" />
      <path d="M50 50C48 55 42 58 35 58C20 58 5 50 5 50C5 50 20 42 35 42C42 42 48 45 50 50Z" opacity="0.9" />
      <path d="M50 50C52 55 58 58 65 58C80 58 95 50 95 50C95 50 80 42 65 42C58 42 52 45 50 50Z" opacity="0.9" />
      <path d="M50 50C50 55 48 62 45 70L50 95L55 70C52 62 50 55 50 50Z" opacity="0.9" />
      <circle cx="50" cy="50" r="5" />
    </svg>
  )
}

export function CardinalBird({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 15L55 5L52 18L60 12L55 22C65 25 75 35 75 50C75 65 63 78 50 80C37 78 25 65 25 50C25 35 35 25 45 22L40 12L48 18L45 5L50 15Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="42" cy="38" r="2.5" fill={color} />
      <path d="M35 45L28 48L35 47" stroke={color} strokeWidth="1.5" />
      <path d="M30 70C35 85 50 90 50 90C50 90 40 80 38 72" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <path d="M70 70C65 85 50 90 50 90C50 90 60 80 62 72" stroke={color} strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}

export function BluesNote({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
      <ellipse cx="30" cy="75" rx="14" ry="10" stroke={color} strokeWidth="2.5" fill="none" transform="rotate(-15 30 75)" />
      <ellipse cx="75" cy="65" rx="14" ry="10" stroke={color} strokeWidth="2.5" fill="none" transform="rotate(-15 75 65)" />
      <line x1="43" y1="70" x2="43" y2="15" stroke={color} strokeWidth="2.5" />
      <line x1="88" y1="60" x2="88" y2="10" stroke={color} strokeWidth="2.5" />
      <path d="M43 15C43 15 55 10 65.5 12.5C76 15 88 10 88 10" stroke={color} strokeWidth="3" />
      <path d="M43 25C43 25 55 20 65.5 22.5C76 25 88 20 88 20" stroke={color} strokeWidth="3" />
    </svg>
  )
}

export function StlSkyline({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 60" fill="none" {...props}>
      {/* Arch silhouette */}
      <path d="M55 10C55 10 40 35 40 55H48C48 40 52 25 55 18C58 25 62 40 62 55H70C70 35 55 10 55 10Z" fill={color} opacity="0.3" />
      {/* Buildings */}
      <rect x="5" y="35" width="8" height="25" fill={color} opacity="0.5" />
      <rect x="15" y="28" width="6" height="32" fill={color} opacity="0.4" />
      <rect x="23" y="38" width="10" height="22" fill={color} opacity="0.5" />
      <rect x="75" y="30" width="7" height="30" fill={color} opacity="0.4" />
      <rect x="84" y="25" width="9" height="35" fill={color} opacity="0.5" />
      <rect x="95" y="32" width="6" height="28" fill={color} opacity="0.4" />
      <rect x="103" y="38" width="12" height="22" fill={color} opacity="0.5" />
      {/* Ground line */}
      <line x1="0" y1="58" x2="120" y2="58" stroke={color} strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export function BuschStadium({ size = 48, color = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 60" fill="none" {...props}>
      <ellipse cx="50" cy="45" rx="42" ry="12" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M15 40C15 28 30 18 50 18C70 18 85 28 85 40" stroke={color} strokeWidth="2" fill="none" />
      {/* Light towers */}
      <line x1="18" y1="38" x2="18" y2="20" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="18" cy="18" r="2" fill={color} opacity="0.5" />
      <line x1="82" y1="38" x2="82" y2="20" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="82" cy="18" r="2" fill={color} opacity="0.5" />
      {/* Arches detail */}
      <path d="M25 38C25 32 35 26 50 26C65 26 75 32 75 38" stroke={color} strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

const floatVariants = {
  animate: (i) => ({
    y: [0, -8, 0],
    rotate: [0, i % 2 === 0 ? 3 : -3, 0],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
}

const stlElements = [
  { Component: GatewayArch, position: { top: '8%', left: '3%' }, size: 44, opacity: 0.08 },
  { Component: FleurDeLis, position: { top: '15%', right: '4%' }, size: 36, opacity: 0.06 },
  { Component: BluesNote, position: { top: '45%', left: '2%' }, size: 38, opacity: 0.07 },
  { Component: CardinalBird, position: { top: '55%', right: '3%' }, size: 40, opacity: 0.06 },
  { Component: StlSkyline, position: { bottom: '18%', left: '5%' }, size: 64, opacity: 0.05 },
  { Component: BuschStadium, position: { bottom: '25%', right: '4%' }, size: 56, opacity: 0.06 },
  { Component: GatewayArch, position: { top: '75%', left: '8%' }, size: 32, opacity: 0.05 },
  { Component: FleurDeLis, position: { bottom: '8%', right: '8%' }, size: 28, opacity: 0.05 },
]

export function StlBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stlElements.map(({ Component, position, size, opacity }, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatVariants}
          animate="animate"
          style={{
            position: 'absolute',
            ...position,
            opacity,
            color: 'var(--cardinals-red)',
          }}
        >
          <Component size={size} />
        </motion.div>
      ))}
    </div>
  )
}
