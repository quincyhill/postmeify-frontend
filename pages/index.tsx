import { useState, useEffect } from 'react'
import { Card } from '../components/post'
import { AvatarLink } from '../components/avatar'
import { getContacts } from '../lib/api'
import { MainAside } from '../components/common'
import type { User, UserList } from '../lib/types'
import { faker } from '@faker-js/faker'

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
    //
    // Going to use faker js for now
    const fakeUser: User = {
      id: 0,
      username: faker.internet.userName(),
      displayName: faker.name.findName(),
      email: faker.internet.email(),
    }

    const fakeUserList = () => {
      const fakeUsers: UserList = []
      for (let i = 0; i < 5; i++) {
        fakeUsers.push({
          id: i,
          username: faker.internet.userName(),
          displayName: faker.name.findName(),
          email: faker.internet.email(),
        } as User)
      }
      return fakeUsers
    }

    setFakeUsers(fakeUserList())
  }, [])

  return (
    <div className="flex flex-row">
      <aside>
        <MainAside userList={fakeUsers} />
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
