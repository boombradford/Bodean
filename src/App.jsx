import { useAudioPlayer } from './hooks/useAudioPlayer'
import { CelebrationBadge, Hero314, ArtistHeader } from './components/ArtistHeader'
import { HeroArtwork } from './components/HeroArtwork'
import { MusicPlayer } from './components/MusicPlayer'
import { SocialLinks } from './components/SocialLinks'
import { Footer } from './components/Footer'
import { StlBackground, CityParticles, ArchSilhouette } from './components/StlElements'
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
        <div className={styles.bottomGlow} />
        <div className={styles.grain} />
        <ArchSilhouette />
        <StlBackground />
        <CityParticles />

        <CelebrationBadge />
        <Hero314 />
        <ArtistHeader />
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
        <HeroArtwork isPlaying={isPlaying} />
        <SocialLinks />
        <Footer />

        <div className={styles.bottomSpacer} />
      </div>
    </>
  )
}

export default App
