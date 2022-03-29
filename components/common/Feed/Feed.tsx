import { VideoCard, ImageCard } from '../../post'
import { ImagePost, VideoPost } from '../../../lib/types'

interface Props {
  imagePosts?: ImagePost[]
  videoPosts?: VideoPost[]
}

export default function Feed({ imagePosts, videoPosts }: Props) {
  // Contains all the scrollable content, images videos and what not

  return (
    <div>
      <div className="flex flex-col px-4 lg:px-0">
        {imagePosts && (
          <div>
            {imagePosts.map((post, key) => (
              <ImageCard key={key} post={post} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col px-4 lg:px-0">
        {videoPosts && (
          <div>
            {videoPosts.map((post, key) => (
              <VideoCard key={key} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
