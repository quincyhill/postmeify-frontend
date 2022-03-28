import axios, { AxiosResponse } from 'axios'
import type { User, ImagePost, VideoPost, Contact } from '../types'
import faker from '@faker-js/faker'
import {
  imagePostsURL,
  contactsListURL,
  videoPostsURL,
  usersListURL,
} from '../constants'

// Have console the error return fake data but make sure to log the error on console for testing purposes
// The backend isnt flushed out yet so this is a temporary solution
export const getContacts = async () => {
  try {
    const res: AxiosResponse<Contact[]> = await axios.get(contactsListURL)
    return res.data
  } catch (error) {
    console.error(error)
    let fakeContactList: Contact[] = []

    for (let i = 0; i < 10; i++) {
      fakeContactList.push({
        id: faker.datatype.number(),
        name: `Faker ${faker.name.findName()}`,
        email: faker.internet.email(),
        topic: faker.lorem.sentence(),
        message: faker.lorem.paragraph(),
        terms_and_conditions: faker.datatype.boolean(),
        date_created: faker.date.past().toISOString(),
      })
    }
    return fakeContactList
  }
}

export const getImagePosts = async () => {
  try {
    const res: AxiosResponse<ImagePost[]> = await axios.get(imagePostsURL)
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returning fake image posts')
    return [] as ImagePost[]
  }
}

export const getVideoPosts = async () => {
  try {
    const res: AxiosResponse<VideoPost[]> = await axios.get(videoPostsURL)
    return res.data
  } catch (error) {
    console.log(error)
    console.log('Instead returning fake video posts')
    return [] as VideoPost[]
  }
}

export const getAllUsers = async () => {
  try {
    const res: AxiosResponse<User[]> = await axios.get(usersListURL)
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returning fake users')
    let fakeUserList: User[] = []
    for (let i = 0; i < 10; i++) {
      fakeUserList.push({
        id: i,
        username: `Bob.the.${i}`,
        displayName: `Bob The ${i}`,
        email: `bob.${i}@mail.com`,
      })
    }
    return fakeUserList
  }
}
