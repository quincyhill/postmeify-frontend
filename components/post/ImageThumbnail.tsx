import { ImagePost } from '../../lib/types'
import styles from './Post.module.css'
interface Props {
  post: ImagePost
}

const Image = ({ post }: Props) => {
  const { img_src, description } = post
  return (
    <div className={`${styles.imageContainer} cursor-pointer`}>
      <img
        src={img_src}
        className={`${styles.imageThumbnailWrapper} rounded-md`}
      />
      <p className="overflow-hidden">{description}</p>
    </div>
  )
}

export default Image
