import { useState, useEffect } from 'react'
import { getAllUsers, getVideoPosts } from '../lib/api'
import { MainAside, Feed } from '../components/common'
import type { User, VideoPost } from '../lib/types'

export default function LivePage() {
  // Ok the UI looks messed up when its not loaded so mabye I'll have a placeholder thingy
  const [users, setUsers] = useState<User[]>([])
  const [videoPosts, setVideoPosts] = useState<VideoPost[]>([])

  useEffect(() => {
    const makeApiCalls = async () => {
      const fakeUsers = await getAllUsers()
      const fakeVideoPosts = await getVideoPosts()

      setUsers(fakeUsers)
      setVideoPosts(fakeVideoPosts)
    }
    makeApiCalls()
  }, [])

  // The main thing is going to be called a feed
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row max-w-7xl">
        <aside className="lg:w-3/12">
          <MainAside userList={users} />
        </aside>
        <section className="lg:w-9/12">
          <Feed videoPosts={videoPosts} />
        </section>
      </div>
    </div>
  )
}
