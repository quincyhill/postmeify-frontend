import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  href: string
  is_current_path: boolean
}

const AsideLink = ({ children, title, href, is_current_path }: Props) => {
  return (
    <Link href={href}>
      <a
        className={
          is_current_path
            ? 'flex flex-row p-2 hover:bg-slate-100 text-rose-600 rounded-md items-center'
            : 'flex flex-row p-2 hover:bg-slate-100 rounded-md items-center'
        }
      >
        {children}
        <span className="hidden lg:block font-semibold text-lg ml-2">
          {title}
        </span>
      </a>
    </Link>
  )
}

export default AsideLink
