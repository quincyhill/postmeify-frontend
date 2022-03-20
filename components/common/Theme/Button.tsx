import { Sun, Moon } from 'react-bootstrap-icons'
import { useState } from 'react'

const Button = () => {
  // NOTE: not working on mobile, needs fixing
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <button
      onClick={() => {
        if (
          localStorage.getItem('postmeifyproject:theme') === 'dark' ||
          (!('postmeifyproject:theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          localStorage.removeItem('postmeifyproject:theme')
          document.documentElement.classList.remove('dark')
          setIsDark(false)
        } else {
          localStorage.setItem('postmeifyproject:theme', 'dark')
          document.documentElement.classList.add('dark')
          setIsDark(true)
        }
      }}
    >
      {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  )
}

export default Button
