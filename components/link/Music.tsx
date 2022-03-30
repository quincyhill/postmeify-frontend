import Link from 'next/link'
import { MusicNote } from 'react-bootstrap-icons'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <div className="ml-2 cursor-pointer">
      <Link href={`/music/${text}`}>
        <a className="flex flex-row font-semibold">
          <MusicNote className="" />
          <span className="hover:underline">{text}</span>
        </a>
      </Link>
    </div>
  )
}

export default Tag
