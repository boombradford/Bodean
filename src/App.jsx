import { motion } from 'framer-motion'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { StlBadge, ArtistHeader } from './components/ArtistHeader'
import { HeroArtwork } from './components/HeroArtwork'
import { MusicPlayer } from './components/MusicPlayer'
import { SocialLinks } from './components/SocialLinks'
import { Footer } from './components/Footer'
import { StlBackground } from './components/StlElements'

function App() {
  const {
    audioElement,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    rewind,
    forward,
    setVolume,
    formatTime,
  } = useAudioPlayer('/track.mp3')

  return (
    <>
      {audioElement}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden',
        }}
      >
        {/* Background red glow */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120%',
            height: '60%',
            background:
              'radial-gradient(ellipse at center, var(--cardinals-red-glow) 0%, rgba(196,30,58,0.08) 40%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* STL floating elements */}
        <StlBackground />

        {/* 314 Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '-5%',
            right: '-3%',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(8rem, 25vw, 14rem)',
            color: 'rgba(196, 30, 58, 0.04)',
            lineHeight: 1,
            pointerEvents: 'none',
            zIndex: 0,
            letterSpacing: '0.05em',
          }}
        >
          314
        </motion.div>

        <StlBadge />
        <ArtistHeader />
        <HeroArtwork isPlaying={isPlaying} />
        <MusicPlayer
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          onTogglePlay={togglePlay}
          onSeek={seek}
          onRewind={() => rewind(10)}
          onForward={() => forward(10)}
          onVolumeChange={setVolume}
          formatTime={formatTime}
        />
        <SocialLinks />
        <Footer />

        <div style={{ height: '3rem' }} />
      </div>
    </>
  )
}

export default App
