import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Person, Gear } from 'react-bootstrap-icons'
import { fakeLogout } from '../../lib/redux/actions/auth'
import Link from 'next/link'

const Dropdown = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="rounded-full w-6 h-6 bg-blue-400 focus:border-2 focus:border-black cursor-pointer"
        onClick={() => {
          // Just toggle stuff
          setIsOpen(!isOpen)
        }}
        onFocus={(e) => {
          // Close the dropdown when the button is not focused
        }}
      ></button>
      {isOpen && (
        <div
          className="absolute mt-16 top-0 right-0 bg-white rounded-md shadow-md flex flex-col cursor-pointer"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <Link href="/user/james">
            <a className="flex flex-row p-2 hover:bg-slate-100 ">
              <Person className="w-6 h-6" /> <span>Profile</span>
            </a>
          </Link>

          <Link href="/settings">
            <a className="flex flex-row p-2 hover:bg-slate-100">
              <Gear className="w-6 h-6" />
              <span>Settings</span>
            </a>
          </Link>

          <hr />
          <button
            className="m-2"
            onClick={() => {
              dispatch(fakeLogout())
            }}
          >
            <span>Log Out</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Dropdown
