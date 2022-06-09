import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { CloudUpload, Send, ChatSquare } from 'react-bootstrap-icons'
import { SearchForm } from '../form'
import store from '../../lib/redux/store'

interface NavLinkProps {
  children: ReactNode
}

const NavLinkContainer = ({ children }: NavLinkProps) => {
  return (
    <div className="flex items-center text-sm mx-4 my-0 text-slate-500 font-semibold tracking-wide pb-1 border-b-2 border-transparent hover:border-rose-600 hover:text-rose-600">
      {children}
    </div>
  )
}

const NotificationsDropDown = () => {
  // when the user clicks the button, show the dropdown
  return (
    <div className="flex flex-col rounded-md shadow-sm">
      <span className="font-semibodl text-xl">Notifications</span>
      <ul>
        <li className="rounded-sm bg-slate-100 ">All</li>
        <li className="rounded-sm bg-slate-100 ">Likes</li>
        <li className="rounded-sm bg-slate-100 ">Comments</li>
        <li className="rounded-sm bg-slate-100 ">Mentions</li>
        <li className="rounded-sm bg-slate-100 ">Followers</li>
      </ul>
      <ul>
        <li className="flex flex-row">
          <img className="bg-green-200 w-6 h-6" />
          <div>
            <span className="font-semibold">Users who liked your comment</span>
            <span className="text-slate-400">Your comment</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default function Header() {
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  // Can check the state to see if user is logged in or not

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return (
    <nav className="bg-white border-b-2 border-slate-200 px-2 py-4">
      <div className="container flex flex-row justify-between items-center mx-auto">
        <div>
          <Link href="/">
            <a className="flex">
              <span className="self-center text-lg font-semibold whitespace-nowrap text-slate-900 hover:text-rose-600 ">
                POSTMEIFY
              </span>
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-row">
          <SearchForm />
        </div>
        <div>
          {isUserLoggedIn ? (
            <ul className="flex flex-row mt-4 text-sm font-medium">
              <li>
                <NavLinkContainer>
                  <Link href="/upload">
                    <a>
                      <CloudUpload className="w-6 h-6" />
                    </a>
                  </Link>
                </NavLinkContainer>
              </li>
              <NavLinkContainer>
                <Link href="/messages">
                  <a>
                    <Send className="w-6 h-6" />
                  </a>
                </Link>
              </NavLinkContainer>
              <NavLinkContainer>
                <button>
                  <ChatSquare className="w-6 h-6" />
                </button>
              </NavLinkContainer>
            </ul>
          ) : (
            <ul className="flex flex-row mt-4 text-sm font-medium">
              <li>
                <Link href="/login">
                  <a
                    className="bg-rose-500 text-white hover:bg-rose-600 rounded-md p-2"
                    onClick={() => {
                      console.log(store.getState())
                    }}
                  >
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}
