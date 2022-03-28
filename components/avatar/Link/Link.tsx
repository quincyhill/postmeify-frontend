import Link from 'next/link'
import type { User } from '../../../lib/types'

interface Props {
  user: User
}

const AvatarLink = ({ user }: Props) => {
  const { id, username, displayName } = user
  return (
    <Link href={`user/${username}`}>
      <a className="flex flex-row p-2 items-center hover:bg-slate-100 rounded-md">
        <img
          className="bg-green-200 h-12 w-12 mr-2 rounded-full "
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">{username}</span>
          {displayName && (
            <div>
              <span className="text-sm text-slate-500">{displayName}</span>
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default AvatarLink
