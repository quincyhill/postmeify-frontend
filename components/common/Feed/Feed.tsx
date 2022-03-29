import { VideoCard, ImageCard } from '../../post'
import { ImagePost, VideoPost, User } from '../../../lib/types'

interface Props {
  imagePosts?: ImagePost[]
  videoPosts?: VideoPost[]
}

export default function Feed({ imagePosts, videoPosts }: Props) {
  // Contains all the scrollable content, images videos and what not

  return (
    <div>
      <div>
        {imagePosts && (
          <div>
            {imagePosts.map((post, key) => {
              // Only the first 3 posts for now
              if (key < 3) {
                return <ImageCard key={key} post={post} />
              } else {
                return null
              }
            })}
          </div>
        )}
      </div>
      <div className="hidden">
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
