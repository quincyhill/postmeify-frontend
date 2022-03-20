export interface User {
  id: number
  username: string
  displayName?: string
  email: string
}

export interface UserList extends Array<User> {
  [id: number]: User
}

interface Post {
  created: string
  title: string
  description: string
  // NOTE: Tags will be changed in the future
  tags: string
}

export interface ImagePost extends Post {
  img_src: string
  owner: string
}

export interface ImagePostList extends Array<ImagePost> {
  [id: number]: ImagePost
}

export interface VideoPost extends Post {
  video_src: string
  owner: string
}

export interface VideoPostList extends Array<VideoPost> {
  [id: number]: VideoPost
}

export interface Contact {
  id: number
  name: string
  email: string
  topic: string
  message: string
  terms_and_conditions: boolean
  date_created: string
}

export interface ContactList extends Array<Contact> {
  [id: number]: Contact
}
