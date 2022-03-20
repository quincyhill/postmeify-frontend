import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  href: string
}

const AsideLink = ({ children, title, href }: Props) => {
  return (
    <Link href={href}>
      <a className="flex flex-row p-2 hover:bg-slate-100 rounded-md items-center">
        {children}
        <span className="font-semibold text-lg ml-2">{title}</span>
      </a>
    </Link>
  )
}

export default AsideLink
