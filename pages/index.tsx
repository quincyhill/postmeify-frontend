import { useState, useEffect } from 'react'
import { Card } from '../components/post'
import { getAllUsers } from '../lib/api'
import { MainAside } from '../components/common'
import type { User } from '../lib/types'

export default function Index() {
  // fake users will be generated from fakerjs until its moved to the backend
  const [fakeUsers, setFakeUsers] = useState<User[]>([])

  // Not useful yet
  useEffect(() => {
    const getmyfakeusers = async () => {
      const fakeUsers = await getAllUsers()
      setFakeUsers(fakeUsers)
    }

    getmyfakeusers()
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
