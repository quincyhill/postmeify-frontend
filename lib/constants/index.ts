// API Endpoints
import type { User } from '../types'
import faker from '@faker-js/faker'

export const LANHost = 'http://192.168.0.16:8000'
export const LocalHost = 'http://localhost:8000'

export const contactsListURL = `${LANHost}/api/contacts`
export const imagePostsURL = `${LANHost}/api/imageposts`
export const videoPostsURL = `${LANHost}/api/videoposts`
export const usersListURL = `${LANHost}/api/users`

export const userDetailUrl = (username: string) => {
  return `${LANHost}/api/users/${username}`
}

export const fakeUserList: User[] = []
for (let i = 0; i < 10; i++) {
  fakeUserList.push({
    id: i,
    username: `Bob.the.${i}`,
    display_name: `Bob The ${i}`,
    email: `bob.${i}@mail.com`,
    avatar_url: faker.image.avatar(),
    biography: faker.lorem.paragraph(),
  })
}
