export interface User {
  id: number
  username: string
  displayName?: string
  email: string
}

interface Post {
  id: number
  created: string
  title: string
  description: string
  // NOTE: Tags will be changed in the future to an array of strings once I get it to work
  tags: string
}

export interface ImagePost extends Post {
  img_src: string
  owner: User
}

export interface VideoPost extends Post {
  video_src: string
  owner: User
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
