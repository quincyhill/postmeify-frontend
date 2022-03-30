import type { ImagePost } from '../../lib/types'
import Link from 'next/link'
import { Tag } from '../link'
import { HeartFill, ChatDotsFill, ShareFill } from 'react-bootstrap-icons'
import styles from './Post.module.css'
interface Props {
  post: ImagePost
}

const Card = ({ post }: Props) => {
  const { description, img_src, owner, tags } = post

  // Will eventaully fix it stacking for mobile but time to work on something else

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
        <div className="flex">
          <img
            src={img_src}
            alt="Image Post"
            className={`${styles.imageWrapper} rounded-md`}
          />
        </div>
        <div className="flex flex-col ml-2">
          <div className="flex flex-col items-center mb-2">
            <div className="bg-slate-100 hover:bg-slate-200 p-4 rounded-full cursor-pointer">
              <HeartFill className="w-6 h-6" />
            </div>
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
