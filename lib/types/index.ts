export interface LoginFormInput {
  username: string
  password: string
}

export interface SignupFormInput {
  username: string
  password: string
  confirmPassword: string
}

export interface User {
  id: number
  username: string
  email: string
  avatar_url?: string
  biography?: string
  display_name?: string
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
  music_src?: string
  owner: User
  n_plays?: number
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
