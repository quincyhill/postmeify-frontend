import { SignupForm } from '../components/form'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div>
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Signup</h1>
        <SignupForm />
        <p>
          Already have an account? Login
          <Link href="/login">
            <a className="underline text-rose-500 hover:text-rose-600 ml-1">
              here
            </a>
          </Link>
        </p>
      </section>
    </div>
  )
}
