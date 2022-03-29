import axios, { AxiosResponse } from 'axios'
import type { User, ImagePost, VideoPost, Contact } from '../types'
import { fakeUserList } from '../constants'
import faker from '@faker-js/faker'
import {
  imagePostsURL,
  contactsListURL,
  videoPostsURL,
  usersListURL,
  userDetailUrl,
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
  // Gets random image posts form any valid random user
  try {
    const res: AxiosResponse<ImagePost[]> = await axios.get(imagePostsURL)
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returning fake image posts')
    let fakeImagePostList: ImagePost[] = []
    for (let i = 0; i < 10; i++) {
      fakeImagePostList.push({
        id: i,
        created: faker.date.past().toISOString(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        tags: faker.lorem.word(),
        img_src: faker.image.imageUrl(),
        // Again valid random owner
        owner: fakeUserList[faker.datatype.number({ min: 0, max: 9 })],
      })
    }
    return fakeImagePostList
  }
}

export const getVideoPosts = async () => {
  // Gets random video posts from any valid random user
  try {
    const res: AxiosResponse<VideoPost[]> = await axios.get(videoPostsURL)
    return res.data
  } catch (error) {
    console.log(error)
    console.log('Instead returning fake video posts')
    let fakeVideoPosts: VideoPost[] = []
    for (let i = 0; i < 10; i++) {
      fakeVideoPosts.push({
        id: i,
        created: faker.date.past().toISOString(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        tags: faker.lorem.word(),
        // Will eventually have some actual video url to connect to try out the vimex player
        video_src: faker.image.imageUrl(),
        // Ensure the random owner is valid
        owner: fakeUserList[faker.datatype.number({ min: 0, max: 9 })],
      })
    }
    return fakeVideoPosts
  }
}

export const getAllUsers = async () => {
  try {
    const res: AxiosResponse<User[]> = await axios.get(usersListURL)
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returning fake users')
    return fakeUserList
  }
}

export const getUser = async (username: string) => {
  // I know this will be a number because of how I set it up so I dont really to need to check to make sure
  // Quick and dirty method
  const last_digit = Number(username.slice(-1))

  try {
    // going with username instead of id since it would be easier on the frontend to query
    const res: AxiosResponse<User> = await axios.get(userDetailUrl(username))
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returing the detailed fake user')
    return {
      id: last_digit,
      username: username,
      displayName: `Bob The ${last_digit}`,
      email: `bob.${last_digit}@mail.com`,
    }
  }
}
