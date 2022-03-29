import { useState, useEffect } from 'react'
import { getAllUsers, getImagePosts, getVideoPosts } from '../lib/api'
import { MainAside, Feed } from '../components/common'
import type { User, ImagePost, VideoPost } from '../lib/types'

export default function Index() {
  // fake users will be generated from fakerjs until its moved to the backend
  const [users, setUsers] = useState<User[]>([])
  const [videoPosts, setVideoPosts] = useState<VideoPost[]>([])
  const [imagePosts, setImagePosts] = useState<ImagePost[]>([])

  useEffect(() => {
    const makeApiCalls = async () => {
      const fakeUsers = await getAllUsers()
      const fakeVideoPosts = await getVideoPosts()
      const fakeImagePosts = await getImagePosts()

      setUsers(fakeUsers)
      setVideoPosts(fakeVideoPosts)
      setImagePosts(fakeImagePosts)
    }
    makeApiCalls()
  }, [])

  // The main thing is going to be called a feed
  return (
    <div className="flex flex-row">
      <aside>
        <MainAside userList={users} />
      </aside>
      <section>
        <Feed imagePosts={imagePosts} videoPosts={videoPosts} />
      </section>
    </div>
  )
}
