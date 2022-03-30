import type { VideoPost } from '../../../lib/types'
import Link from 'next/link'
import { Tag, MusicLink } from '../../link'
import {
  HeartFill,
  ChatDotsFill,
  ShareFill,
  Play,
  Pause,
  VolumeUp,
  VolumeMute,
} from 'react-bootstrap-icons'
import useVideoPlayer from '../../../lib/hooks/useVideoPlayer'
import styles from './Video.module.css'
import { useRef, useState } from 'react'

interface Props {
  post: VideoPost
}

const Card = ({ post }: Props) => {
  // Nah just gonna use flexbox since I know it better for now
  const { created, description, video_src, owner, tags, title } = post

  // Starts off null but will reference a video element
  const videoElement = useRef<HTMLVideoElement>(null)

  const {
    isMuted,
    isPlaying,
    progress,
    speed,
    currentTimeFormatted,
    durationFormatted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement)

  const [isHearted, setIsHearted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <img
          src={owner.avatar_url}
          alt="avatar"
          className="bg-green-200 w-16 h-16 rounded-full cursor-pointer"
        />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <span className="flex">
              <Link href={`user/${owner.username}`}>
                <a className=" font-semibold text-xl text-slate-900 hover:underline cursor-pointer">
                  {owner.username}
                </a>
              </Link>
            </span>
            <span className="flex flex-row items-center">
              <Link href={`user/${owner.username}`}>
                <a className="pl-2 text-slate-900 cursor-pointer">
                  {owner.display_name}
                </a>
              </Link>
            </span>
          </div>
          <div className="flex flex-col">
            <span>{description}</span>
            <div className="flex flex-wrap">
              {tags.map((tag: string, key: number) => (
                <Tag text={tag} key={key} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="border border-rose-400 rounded-md h-min px-4 py-1 text-rose-400 hover:bg-rose-100">
            Follow
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row lg:w-16"></div>
        <div
          id="My Video Player"
          className="relative rounded-md"
          onMouseOver={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            className={`${styles.videoWrapper} rounded-md cursor-pointer`}
            loop
            autoPlay
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          >
            <source src={video_src} type="video/mp4" />
          </video>
          <div
            id="MyControls"
            className={
              showControls
                ? 'absolute bottom-0 w-full flex flex-col p-2'
                : 'hidden'
            }
          >
            <div
              id="PlayPauseButton"
              className="flex flex-row w-full items-center"
            >
              <div className="flex justify-between w-full">
                <button className="cursor-pointer" onClick={togglePlay}>
                  {!isPlaying ? (
                    <Play className="text-white w-12 h-12 hover:text-slate-200" />
                  ) : (
                    <Pause className="text-white w-12 h-12 hover:text-slate-200" />
                  )}
                </button>
                <button className="cursor-pointer" onClick={toggleMute}>
                  {!isMuted ? (
                    <VolumeUp className="text-white w-12 h-12 hover:text-slate-200" />
                  ) : (
                    <VolumeMute className="text-white w-12 h-12 hover:text-slate-200" />
                  )}
                </button>
              </div>
              <div>
                <select
                  className="rounded-md border-2 border-white bg-transparent text-white hover:text-slate-200 hover:border-slate-200"
                  value={speed}
                  onChange={(e) => handleVideoSpeed(e)}
                >
                  <option className="bg-black border-white" value="0.50">
                    0.50x
                  </option>
                  <option className="bg-black border-white" value="1">
                    1x
                  </option>
                  <option className="bg-black border-white" value="1.25">
                    1.25x
                  </option>
                  <option className="bg-black border-white" value="2">
                    2x
                  </option>
                </select>
              </div>
            </div>
            <div className="">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => handleVideoProgress(e)}
                className="w-full appearance-none h-1 bg-slate-200 rounded outline-none"
              />
            </div>
            <div className="text-white">
              <span>{currentTimeFormatted} / </span>
              <span>{durationFormatted}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <div className="flex flex-col items-center mb-2">
            <button
              className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer"
              onClick={() => setIsHearted(!isHearted)}
            >
              <HeartFill
                className={
                  isHearted ? 'text-rose-500 w-6 h-6' : 'text-black w-6 h-6'
                }
              />
            </button>
            <span className="font-medium text-slate-800">12.4k</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <a className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer">
              <ChatDotsFill className="w-6 h-6" />
            </a>
            <span className="font-medium text-slate-800">1234</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer">
              <ShareFill className="w-6 h-6" />
            </div>
            <span className="font-medium text-slate-800">12</span>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  )
}

export default Card
