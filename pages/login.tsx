import { LoginForm } from '../components/form'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <LoginForm />
        <p>
          Dont have an account? Sign up
          <Link href="/signup">
            <a className="underline text-rose-500 hover:text-rose-600 ml-1">
              here
            </a>
          </Link>
        </p>
      </section>
    </div>
  )
}
