import { Topic } from '../link'
import {
  EmojiSmile,
  Controller,
  Egg,
  Stars,
  Brush,
  Wind,
  HouseDoor,
  People,
} from 'react-bootstrap-icons'

import { useRouter } from 'next/router'

import { User } from '../../lib/types'
import { Link } from '../avatar'
import { Footer } from '../common'

interface Props {
  userList: User[]
}

export default function MainAside({ userList }: Props) {
  const router = useRouter()
  const current_path = router.pathname

  return (
    <div className="border-r-2 border-slate-200 shadow-lg lg:border-none lg:shadow-none">
      <ul className="flex flex-col m-2">
        <li>
          <Topic
            title="For You"
            href="/"
            is_current_path={current_path === '/'}
          >
            <HouseDoor className="w-8 h-8" />
          </Topic>
        </li>
        <li>
          <Topic
            title="Following"
            href="/following"
            is_current_path={current_path === 'following'}
          >
            <People className="w-8 h-8" />
          </Topic>
        </li>
      </ul>
      <hr />
      <section>
        <span className="hidden lg:block">Popular Topics</span>
        <ul className="flex flex-col">
          <li className="flex justify-center lg:block">
            <Topic
              title="Comedy"
              href="/topic/comedy"
              is_current_path={current_path === 'comedy'}
            >
              <EmojiSmile className="h-8 w-8" />
            </Topic>
          </li>
          <li className="flex justify-center lg:block">
            <Topic
              title="Gaming"
              href="/topic/gaming"
              is_current_path={current_path === 'gaming'}
            >
              <Controller className="h-8 w-8" />
            </Topic>
          </li>
          <li className="flex justify-center lg:block">
            <Topic
              title="Food"
              href="/topic/food"
              is_current_path={current_path === 'food'}
            >
              <Egg className="h-8 w-8" />
            </Topic>
          </li>
          <li className="flex justify-center lg:block">
            <Topic
              title="Dance"
              href="/topic/dance"
              is_current_path={current_path == 'dance'}
            >
              <Stars className="h-8 w-8" />
            </Topic>
          </li>
          <li className="flex justify-center lg:block">
            <Topic
              title="Beauty"
              href="/topic/beauty"
              is_current_path={current_path === 'beauty'}
            >
              <Brush className="h-8 w-8" />
            </Topic>
          </li>
          <li className="flex justify-center lg:block">
            <Topic
              title="Sports"
              href="/topic/sports"
              is_current_path={current_path === 'sports'}
            >
              <Wind className="h-8 w-8" />
            </Topic>
          </li>
        </ul>
      </section>
      <hr />
      <section className="flex flex-col">
        <span className="text-slate-500 font-lg hidden lg:block">
          Suggested accounts
        </span>
        {userList.length > 0 && (
          <ul>
            {userList.map((user: User, key) => (
              <li key={key}>
                <Link user={user} />
              </li>
            ))}
          </ul>
        )}
        <button className="text-rose-400 font-semibold hidden lg:block">
          See all
        </button>
      </section>
      <hr />
      <section className="flex flex-col">
        <span className="text-slate-500 font-lg hidden lg:block">
          Following accounts
        </span>
        {userList.length > 0 && (
          <ul>
            {userList.map((user: User, key) => (
              <li key={key}>
                <Link user={user} />
              </li>
            ))}
          </ul>
        )}
        <button className="text-rose-400 font-semibold hidden lg:block">
          See more
        </button>
      </section>
      <hr />
      <section className="hidden lg:block">
        <span className="text-slate-500 font-lg">Discover</span>
      </section>
      <section className="hidden lg:block">
        <Footer />
      </section>
    </div>
  )
}
