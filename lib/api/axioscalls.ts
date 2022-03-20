import axios, { AxiosResponse } from 'axios'
import type { ImagePostList, VideoPostList, ContactList } from '../types'
import { imagePostsURL, contactsListURL, videoPostsURL } from '../constants'

// Could all rename these but this is fine for now
export const getContacts = async () => {
  try {
    const res: AxiosResponse<ContactList> = await axios.get(contactsListURL)
    return res.data
  } catch (error) {
    console.error(error)
    return [] as ContactList
  }
}

export const getImagePosts = async () => {
  try {
    const res: AxiosResponse<ImagePostList> = await axios.get(imagePostsURL)
    return res.data
  } catch (error) {
    console.error(error)
    return [] as ImagePostList
  }
}

export const getVideoPosts = async () => {
  try {
    const res: AxiosResponse<VideoPostList> = await axios.get(videoPostsURL)
    return res.data
  } catch (error) {
    console.log(error)
    return [] as VideoPostList
  }
}
