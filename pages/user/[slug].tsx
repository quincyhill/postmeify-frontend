import { GetStaticProps, GetStaticPaths } from 'next'
import { User, VideoPost, ImagePost } from '../../lib/types'
import {
  getAllUsers,
  getUser,
  getVideoPosts,
  getImagePosts,
} from '../../lib/api'
import { ParsedUrlQuery } from 'querystring'
import { MainAside } from '../../components/common'
import { useEffect, useState } from 'react'
import { Share, ChatDots } from 'react-bootstrap-icons'
import {
  VideoThumbnail,
  ImageThumbnail,
  VideoCard,
} from '../../components/post'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  // This if for the paths
  const users = await getAllUsers()

  let userPaths = users.map((user) => ({
    params: {
      slug: user.username,
    },
  }))

  return {
    paths: userPaths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // The slug value of the specific page
  const { slug } = context.params as Params

  // Here I can make a call to the backend requesting just that user instead of going through the entire list

  const user = await getUser(slug)

  return {
    props: {
      user,
    },
  }
}

interface Props {
  user: User
}

export default function UserPage({ user }: Props) {
  // for some reason, if I navigate from this page to another page, then back without refreshing the app it does a 404
  const [users, setUsers] = useState<User[]>([])
  const [videoPosts, setVideoPosts] = useState<VideoPost[]>([])
  const [imagePosts, setImagePosts] = useState<ImagePost[]>([])
  const [videosSelected, setVideosSelected] = useState<boolean>(false)
  const [imagesSelected, setImagesSelected] = useState<boolean>(false)
  const [likedSelected, setLikedSelected] = useState<boolean>(true)

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

  return (
    <div className="flex flex-row">
      <aside>
        <MainAside userList={users} />
      </aside>
      <section className="flex flex-col p-4">
        <div className="flex flex-row">
          <div className="flex">
            <img
              src={user.avatar_url}
              className="bg-green-200 w-16 h-16 rounded-full cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-2xl">{user.username}</span>
            <span className="font-medium text-lg">{user.display_name}</span>
            <button className="bg-rose-500 hover:bg-rose-600 text-white rounded-md px-16 py-2">
              Follow
            </button>
          </div>
          <div className="flex flex-row">
            <div className="m-2 cursor-pointer">
              <Share className="w-6 h-6" />
            </div>
            <div className="m-2 cursor-pointer">
              <ChatDots className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex flex-row text-slate-700">
          <div className="flex flex-row mr-4">
            <strong className="mr-2">0</strong>
            <span>Following</span>
          </div>
          <div className="flex flex-row mr-4">
            <strong className="mr-2">123.5K</strong>
            <span>Followers</span>
          </div>
          <div className="flex flex-row mr-4">
            <strong className="mr-2">4.4M</strong>
            <span>Likes</span>
          </div>
        </div>
        <div>
          <span>{user.biography}</span>
        </div>
        <div className="flex flex-col">
          <div id="VideosImagesandLiked">
            <div className="flex flex-row text-lg font-semibold text-slate-600">
              <span
                onClick={() => {
                  setVideosSelected(true)
                  setImagesSelected(false)
                  setLikedSelected(false)
                }}
                className={`${
                  videosSelected
                    ? 'text-slate-800 border-b-2 border-slate-800'
                    : 'text-slate-600'
                } cursor-pointer py-2 px-16 hover:border-b-2 border-slate-800`}
              >
                Videos
              </span>
              <span
                onClick={() => {
                  setVideosSelected(false)
                  setImagesSelected(true)
                  setLikedSelected(false)
                }}
                className={`${
                  imagesSelected
                    ? 'text-slate-800 border-b-2 border-slate-800'
                    : 'text-slate-600'
                } cursor-pointer py-2 px-16 hover:border-b-2 border-slate-800`}
              >
                Images
              </span>
              <span
                onClick={() => {
                  setVideosSelected(false)
                  setImagesSelected(false)
                  setLikedSelected(true)
                }}
                className={`${
                  likedSelected
                    ? 'text-slate-800 border-b-2 border-slate-800'
                    : 'text-slate-600'
                } cursor-pointer py-2 px-16 hover:border-b-2 border-slate-800`}
              >
                Liked
              </span>
            </div>
          </div>
          {videosSelected && (
            <div
              id="Videos For This User"
              className="flex flex-wrap bg-green-200 p-2"
            >
              {videoPosts ? (
                <div className="flex flex-wrap">
                  {videoPosts.map((post, key) => (
                    <div key={key} className="mr-2 mb-2">
                      <VideoThumbnail key={key} post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <div>No Videos</div>
              )}
            </div>
          )}
          {imagesSelected && (
            <div id="Videos For This User" className="flex flex-wrap p-2">
              {imagePosts ? (
                <div className="flex flex-wrap">
                  {imagePosts.map((post, key) => (
                    <div key={key} className="mr-2 mb-2">
                      <ImageThumbnail key={key} post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <div>No Images</div>
              )}
            </div>
          )}
          {likedSelected && (
            <div id="Videos For This User" className="flex flex-wrap">
              <img className="bg-blue-200 w-48 h-64" loading="lazy" />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
