import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <div className="ml-2">
      <Link href={`/tag/${text}`}>
        <a className="hover:underline font-semibold">#{text}</a>
      </Link>
    </div>
  )
}

export default Tag
