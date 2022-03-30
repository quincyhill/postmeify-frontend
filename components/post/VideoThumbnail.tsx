import { VideoPost } from '../../lib/types'
import styles from './Post.module.css'
import { useRef } from 'react'
import { Play } from 'react-bootstrap-icons'
import useVideoPlayer from '../../lib/hooks/useVideoPlayer'
import Link from 'next/link'

interface Props {
  post: VideoPost
}

const Video = ({ post }: Props) => {
  const { video_src } = post
  const videoElement = useRef<HTMLVideoElement>(null)

  const { isMuted, isPlaying, setIsPlaying, resetVideo, handleOnTimeUpdate } =
    useVideoPlayer(videoElement)

  return (
    <div
      className="flex flex-col rounded-md cursor-pointer"
      onMouseOver={() => {
        setIsPlaying(true)
      }}
      onMouseLeave={() => {
        resetVideo()
        setIsPlaying(false)
      }}
    >
      <div className="relative">
        <video
          className={`${styles.videoThumbnailWrapper} rounded-md`}
          loop
          autoPlay
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        >
          <source src={video_src} type="video/mp4" />
        </video>
        <div
          className="absolute bottom-0 text-white flex flex-row"
          id="stuff about it"
        >
          <Play className="w-6 h-6" />
          <span className="ml-2">52.2M</span>
        </div>
      </div>
    </div>
  )
}

export default Video
