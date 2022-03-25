import { AsideLink } from '../../link'
import {
  EmojiSmile,
  Controller,
  Egg,
  Stars,
  Brush,
  Wind,
  HouseDoor,
  People,
  CameraVideo,
} from 'react-bootstrap-icons'

import { User, UserList } from '../../../lib/types'
import { AvatarLink } from '../../avatar'
import { Footer } from '..'

interface Props {
  userList: UserList
}

export default function MainAside({ userList }: Props) {
  return (
    <div>
      <ul className="flex flex-col m-2">
        <li>
          <AsideLink title="For You" href="/">
            <HouseDoor className="w-8 h-8" />
          </AsideLink>
        </li>
        <li>
          <AsideLink title="Following" href="/following">
            <People className="w-8 h-8" />
          </AsideLink>
        </li>
        <li>
          <AsideLink title="LIVE" href="/live">
            <CameraVideo className="w-8 h-8" />
          </AsideLink>
        </li>
      </ul>
      <hr />
      <section>
        <span>Popular Topics</span>
        <ul className="flex flex-col">
          <li>
            <AsideLink title="Comedy" href="/topics/comedy">
              <EmojiSmile className="h-8 w-8" />
            </AsideLink>
          </li>
          <li>
            <AsideLink title="Gaming" href="/topic/gaming">
              <Controller className="h-8 w-8" />
            </AsideLink>
          </li>
          <li>
            <AsideLink title="Food" href="/topic/food">
              <Egg className="h-8 w-8" />
            </AsideLink>
          </li>
          <li>
            <AsideLink title="Dance" href="/topic/dance">
              <Stars className="h-8 w-8" />
            </AsideLink>
          </li>
          <li>
            <AsideLink title="Beauty" href="/topic/beauty">
              <Brush className="h-8 w-8" />
            </AsideLink>
          </li>
          <li>
            <AsideLink title="Sports" href="/topic/sports">
              <Wind className="h-8 w-8" />
            </AsideLink>
          </li>
        </ul>
      </section>
      <hr />
      <section className="flex flex-col">
        <span className="text-slate-500 font-lg">Suggested accounts</span>
        {userList.length > 0 && (
          <ul>
            {userList.map((user: User, key) => (
              <li key={key}>
                <AvatarLink user={user} />
              </li>
            ))}
          </ul>
        )}
        <button className="text-rose-400 font-semibold">See all</button>
      </section>
      <hr />
      <section className="flex flex-col">
        <span className="text-slate-500 font-lg">Following accounts</span>
        {userList.length > 0 && (
          <ul>
            {userList.map((user: User, key) => (
              <li key={key}>
                <AvatarLink user={user} />
              </li>
            ))}
          </ul>
        )}
        <button className="text-rose-400 font-semibold">See more</button>
      </section>
      <hr />
      <section>
        <span className="text-slate-500 font-lg">Discover</span>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
