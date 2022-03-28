import { GetStaticProps, GetStaticPaths } from 'next'
import { User } from '../../lib/types'
import { getAllUsers } from '../../lib/api'

export async function getStaticPaths() {
  // This if for the paths
  const users = await getAllUsers()

  let userPaths = users.map((user) => ({
    params: {
      slug: user.username,
    },
  }))

  console.log('From getstaticpaths: ', userPaths)

  return {
    paths: userPaths,
    fallback: false,
  }
}

export async function getStaticProps() {
  const users = await getAllUsers()
  return {
    props: {
      users,
    },
  }
}

interface Props {
  users: User[]
}

export default function UserPage({ users }: Props) {
  return (
    <div>
      <h1>Hello there from the user page</h1>
      <h1>Hello there from the user page</h1>
      <p>{JSON.stringify(users)}</p>
    </div>
  )
}
