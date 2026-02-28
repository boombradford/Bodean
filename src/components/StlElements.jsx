import { useMemo } from 'react'
import { motion } from 'framer-motion'
import styles from './StlElements.module.css'

export function CardinalsSTL({ size = 48, className, style, ...props }) {
  return (
    <img
      src="/stl-logo.png"
      alt="STL"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain', ...style }}
      draggable={false}
      {...props}
    />
  )
}

/* ── Gateway Arch silhouette ── */
export function ArchSilhouette() {
  return (
    <div className={styles.archWrap}>
      <svg viewBox="0 0 400 320" fill="none" className={styles.archSvg}>
        <path
          d="M200 18 C140 18 68 120 58 295 L78 295 C86 140 155 48 200 36 C245 48 314 140 322 295 L342 295 C332 120 260 18 200 18Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

/* ── City particles (CSS-animated for performance) ── */
export function CityParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        x: Math.random() * 100,
        size: 2 + Math.random() * 3,
        color: i % 3 === 0 ? 'var(--gold)' : 'var(--cardinals-red)',
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 12,
        drift: -30 + Math.random() * 60,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    []
  )

  return (
    <div className={styles.particleField}>
      {particles.map((p, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            '--particle-duration': `${p.duration}s`,
            '--particle-delay': `${p.delay}s`,
            '--particle-drift': `${p.drift}px`,
            '--particle-opacity': p.opacity,
          }}
        />
      ))}
    </div>
  )
}

/* ── Background floating STL logos ── */
const floatVariants = {
  animate: (i) => ({
    y: [0, -10, 2, -6, 0],
    x: [0, i % 2 === 0 ? 4 : -4, 0],
    rotate: [0, i % 2 === 0 ? 3 : -3, 0],
    scale: [1, 1.04, 0.98, 1.02, 1],
    transition: {
      duration: 6 + i * 0.8,
      repeat: Infinity,
      ease: [0.37, 0, 0.63, 1],
    },
  }),
}

const stlElements = [
  { position: { top: '8%', left: '3%' }, size: 40, opacity: 0.06 },
  { position: { top: '16%', right: '4%' }, size: 30, opacity: 0.04 },
  { position: { top: '55%', left: '2%' }, size: 34, opacity: 0.05 },
  { position: { bottom: '28%', right: '3%' }, size: 28, opacity: 0.04 },
  { position: { bottom: '10%', left: '5%' }, size: 32, opacity: 0.05 },
]

export function StlBackground() {
  return (
    <div className={styles.backdrop}>
      {stlElements.map(({ position, size, opacity }, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatVariants}
          animate="animate"
          className={styles.element}
          style={{ ...position, opacity, willChange: 'transform' }}
        >
          <CardinalsSTL size={size} />
        </motion.div>
      ))}
    </div>
  )
}
