import { GetStaticProps, GetStaticPaths } from 'next'
import { User } from '../../lib/types'
import { getAllUsers, getUser } from '../../lib/api'
import { ParsedUrlQuery } from 'querystring'

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

  console.log('From getstaticpaths: ', userPaths)

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
  return (
    <div>
      <h1>Hello there from the user page</h1>
      <h1>Hello there from the user page</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}
