import { useState, useRef, useEffect, useCallback } from 'react'

export function useAudioPlayer(src) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(0.8)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)

    audio.volume = 0.8

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [])

  const seek = useCallback((pct) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    audio.currentTime = pct * audio.duration
  }, [])

  const rewind = useCallback((seconds = 10) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, audio.currentTime - seconds)
  }, [])

  const forward = useCallback((seconds = 10) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + seconds)
  }, [])

  const setVolume = useCallback((val) => {
    const audio = audioRef.current
    if (!audio) return
    const v = Math.max(0, Math.min(1, val))
    audio.volume = v
    setVolumeState(v)
  }, [])

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.target.tagName === 'INPUT') return
      switch (e.code) {
        case 'Space':
          e.preventDefault()
          togglePlay()
          break
        case 'ArrowLeft':
          rewind(5)
          break
        case 'ArrowRight':
          forward(5)
          break
        case 'ArrowUp':
          e.preventDefault()
          setVolume(volume + 0.05)
          break
        case 'ArrowDown':
          e.preventDefault()
          setVolume(volume - 0.05)
          break
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [togglePlay, rewind, forward, setVolume, volume])

  const formatTime = (seconds) => {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const audioElement = <audio ref={audioRef} preload="auto" src={src} />

  return {
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
  }
}
