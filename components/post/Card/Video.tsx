import type { VideoPost } from '../../../lib/types'
import Link from 'next/link'
import { Tag, MusicLink } from '../../link'
import {
  HeartFill,
  ChatDotsFill,
  ShareFill,
  PlayBtn,
  PauseBtn,
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
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement)

  const [isHearted, setIsHearted] = useState(false)

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
        <div id="My Video Player" className="relative">
          <video
            className={`${styles.videoWrapper} rounded-md cursor-pointer`}
            loop
            autoPlay
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          >
            <source src={video_src} type="video/mp4" />
          </video>
          <div className="absolute bottom-0 w-full">
            <div id="PlayPauseButton" className="flex flex-row justify-center">
              <button className="cursor-pointer" onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <PlayBtn className="text-white w-12 h-12 hover:text-rose-200" />
                ) : (
                  <PauseBtn className="text-white w-12 h-12 hover:text-rose-200" />
                )}
              </button>
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
    </div>
  )
}

export default Card
