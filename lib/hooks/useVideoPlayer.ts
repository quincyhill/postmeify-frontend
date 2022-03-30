import { useState, useEffect, useRef, RefObject } from 'react'

const useVideoPlayer = (videoElement: RefObject<HTMLVideoElement>) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('00:00')
  const [durationFormatted, setDurationFormatted] = useState('00:00')

  const togglePlay = () => {
    // Will toggle if video is playing
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    // If player state is playing, set video element to playing
    if (videoElement !== null && videoElement.current !== null) {
      isPlaying ? videoElement.current.play() : videoElement.current.pause()
    }
  }, [isPlaying, videoElement])

  // Makes time pretty
  const formatTime = (totalSecondsInteger: number) => {
    const minutes = Math.floor(totalSecondsInteger / 60)
    const seconds = totalSecondsInteger % 60

    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`

    return formattedTime
  }

  useEffect(() => {
    // This runs all the time progress is updated, I think

    if (videoElement !== null && videoElement.current !== null) {
      // Sets current time in seconds
      const totalSecondsInteger = Math.floor(videoElement.current.currentTime)
      setCurrentTimeFormatted(formatTime(totalSecondsInteger))
    }
  }, [progress, videoElement])

  useEffect(() => {
    if (videoElement !== null && videoElement.current !== null) {
      //
      const totalSecondsInteger = Math.floor(videoElement.current.duration)
      setDurationFormatted(formatTime(totalSecondsInteger))
    }
  }, [videoElement])

  const handleOnTimeUpdate = () => {
    // Get current time of video
    if (videoElement !== null && videoElement.current !== null) {
      const progress =
        (videoElement.current.currentTime / videoElement.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleVideoProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(e.target.value)
    if (videoElement !== null && videoElement.current !== null) {
      videoElement.current.currentTime =
        (videoElement.current.duration * manualChange) / 100
      setProgress(manualChange)
    }
  }

  const handleVideoSpeed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const speed = Number(e.target.value)
    if (videoElement !== null && videoElement.current !== null) {
      videoElement.current.playbackRate = speed
      setSpeed(speed)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    if (videoElement !== null && videoElement.current !== null) {
      isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false)
    }
  }, [isMuted, videoElement])

  return {
    isPlaying,
    progress,
    speed,
    isMuted,
    currentTimeFormatted,
    durationFormatted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  }
}

export default useVideoPlayer
