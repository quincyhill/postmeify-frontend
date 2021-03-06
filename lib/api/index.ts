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
    let randomNumTags: number
    let tagsList: string[] = []

    for (let i = 0; i < 10; i++) {
      randomNumTags = Math.floor(Math.random() * 10) + 5
      tagsList = new Array(randomNumTags)
        .fill(null)
        .map(() => faker.lorem.word())

      fakeImagePostList.push({
        id: i,
        created: faker.date.past().toISOString(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        tags: tagsList,
        img_src: '/test_img.jpg',
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
    let randomNumTags: number
    let tagsList: string[] = []
    for (let i = 0; i < 10; i++) {
      randomNumTags = Math.floor(Math.random() * 10) + 5
      tagsList = new Array(randomNumTags)
        .fill(null)
        .map(() => faker.lorem.word())

      fakeVideoPosts.push({
        id: i,
        created: faker.date.past().toISOString(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        tags: tagsList,
        video_src: '/test_video.mp4',
        owner: fakeUserList[faker.datatype.number({ min: 0, max: 9 })],
        n_plays: faker.datatype.number({ min: 20, max: 20000000 }),
      })
    }
    return fakeVideoPosts
  }
}

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const res: AxiosResponse<User[]> = await axios.get(usersListURL)
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returning fake users')
    return fakeUserList
  }
}

export const getUser = async (username: string): Promise<User> => {
  const last_digit = Number(username.slice(-1))
  console.log('The last digit is: ' + last_digit)
  try {
    const res: AxiosResponse<User> = await axios.get(userDetailUrl(username))
    return res.data
  } catch (error) {
    console.error(error)
    console.log('Instead returing the detailed fake user')
    return fakeUserList[last_digit]
  }
}
