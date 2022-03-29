export interface User {
  id: number
  username: string
  display_name?: string
  email: string
  avatar_url?: string
}

interface Post {
  id: number
  created: string
  title: string
  description: string
  tags: string[]
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
