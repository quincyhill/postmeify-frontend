import { useState, useEffect } from 'react'
import { Card } from '../components/post'
import { AvatarLink } from '../components/avatar'
import { getContacts } from '../lib/api'
import { AsideLink } from '../components/link'
import { Footer } from '../components/common'
import type { User, UserList } from '../lib/types'

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

export default function Index() {
  // fake users will be generated from fakerjs until its moved to the backend
  const [fakeUsers, setFakeUsers] = useState<UserList>([])

  // Not useful yet
  useEffect(() => {
    // Make API to get all the faker users
    // const resolveCalls = async () => {
    //   setFakeUsers(await getFakeUsers(5))
    //   console.log(fakeUsers)
    // }
    // resolveCalls()
  }, [])

  return (
    <div className="flex flex-row">
      <aside>
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
          {fakeUsers.length > 0 && (
            <ul>
              {fakeUsers.map((user: User, key) => (
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
          {fakeUsers.length > 0 && (
            <ul>
              {fakeUsers.map((user: User, key) => (
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
      </aside>
      <section>
        {fakeUsers.length > 0 && (
          <ul>
            <li>
              <Card key={2} user={fakeUsers[0]} />
            </li>
          </ul>
        )}
      </section>
    </div>
  )
}
