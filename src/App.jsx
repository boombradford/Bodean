import { motion } from 'framer-motion'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { StlBadge, ArtistHeader } from './components/ArtistHeader'
import { HeroArtwork } from './components/HeroArtwork'
import { MusicPlayer } from './components/MusicPlayer'
import { SocialLinks } from './components/SocialLinks'
import { Footer } from './components/Footer'
import { StlBackground } from './components/StlElements'
import styles from './App.module.css'

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
      <div className={styles.hero}>
        <div className={styles.bgGlow} />
        <div className={styles.bottomFade} />
        <StlBackground />

        <motion.div
          className={styles.watermark}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
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

        <div className={styles.bottomSpacer} />
      </div>
    </>
  )
}

export default App
