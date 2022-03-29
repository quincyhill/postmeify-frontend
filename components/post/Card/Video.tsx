import type { VideoPost } from '../../../lib/types'
import Link from 'next/link'
import { Tag, MusicLink } from '../../link'
import { HeartFill, ChatDotsFill, ShareFill } from 'react-bootstrap-icons'

interface Props {
  post: VideoPost
}

const Card = ({ post }: Props) => {
  // Nah just gonna use flexbox since I know it better for now
  const { created, description, video_src, owner, tags, title } = post

  return (
    <div className="flex flex-col">
      <div className="flex flex-row" id="top-part">
        <img className="bg-green-200 w-24 h-24 rounded-full cursor-pointer" />
        <div className="flex flex-col pl-4">
          <div className="flex flex-row">
            <Link href="#">
              <a className=" font-semibold text-xl text-slate-900 hover:underline cursor-pointer">
                {owner.username}
              </a>
            </Link>
            <Link href="#">
              <a className="pl-2 text-slate-900 cursor-pointer">
                {owner.display_name}
              </a>
            </Link>
          </div>
          <div className="flex flex-row ">
            <span>
              Image how this description will look when its hydrated by related
              content,
            </span>
            <Tag text="hey" />
            <Tag text="something" />
            <Tag text="yeet" />
          </div>
        </div>
        <button className="border border-rose-400 rounded-md h-min p-2 text-rose-400 hover:bg-rose-100">
          Follow
        </button>
      </div>
      <div className="flex flex-row" id="content-part">
        <div className="flex flex-col">
          <MusicLink text="original sound - testbeat!" />
          <div className="flex">
            {/* This is where the video like message and share button will go will use vime in this instance for video temp is an img*/}
            <img className="h-96 w-24 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer">
            <HeartFill />
          </div>
          <a className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer">
            <ChatDotsFill />
          </a>
          <div className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer">
            <ShareFill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
