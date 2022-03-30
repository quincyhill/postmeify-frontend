import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-row text-slate-500 text-md">
      <ul>
        <li>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a className="hover:underline">Terms</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a className="hover:underline">Privacy</a>
          </Link>
        </li>
        <li>&#169; 2022 Postmeify</li>
      </ul>
    </footer>
  )
}
