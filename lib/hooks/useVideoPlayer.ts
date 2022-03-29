import { useState, useEffect, useRef, RefObject } from 'react'

interface PlayerState {
  isPlaying: boolean
  progress: number
  speed: number
  isMuted: boolean
}

const useVideoPlayer = (videoElement: RefObject<HTMLVideoElement>) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  })

  const togglePlay = () => {
    // Will toggle if video is playing
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    })
  }

  useEffect(() => {
    // If player state is playing, set video element to playing
    if (videoElement !== null && videoElement.current !== null) {
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause()
    }
  }, [playerState.isPlaying, videoElement])

  const handleOnTimeUpdate = () => {
    // Get current time of video
    if (videoElement !== null && videoElement.current !== null) {
      const progress =
        (videoElement.current.currentTime / videoElement.current.duration) * 100
      setPlayerState({ ...playerState, progress: progress })
    }
  }

  const handleVideoProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(e.target.value)
    if (videoElement !== null && videoElement.current !== null) {
      videoElement.current.currentTime =
        (videoElement.current.duration * manualChange) / 100
      setPlayerState({
        ...playerState,
        progress: manualChange,
      })
    }
  }

  const handleVideoSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const speed = Number(e.target.value)
    if (videoElement !== null && videoElement.current !== null) {
      videoElement.current.playbackRate = speed
      setPlayerState({ ...playerState, speed: speed })
    }
  }

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    })
  }

  useEffect(() => {
    if (videoElement !== null && videoElement.current !== null) {
      playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false)
    }
  }, [playerState.isMuted, videoElement])

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  }
}

export default useVideoPlayer
