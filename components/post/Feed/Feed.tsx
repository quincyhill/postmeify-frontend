import { Card } from '..'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Feed = ({ children }: Props) => {
  return (
    <div className="bg-green-200">
      <div>{children}</div>
    </div>
  )
}

export default Feed
