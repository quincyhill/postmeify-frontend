import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import type { SignupFormInput } from '../../lib/types'

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormInput>()

  const router = useRouter()

  const onSubmit: SubmitHandler<SignupFormInput> = (data) => {
    // Check to make sure the passwords match
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match')
      // Clear out the password fields
      setValue('password', '')
      setValue('confirmPassword', '')
      // Obviously dont redirect since it didnt work out
      return
    }

    // Make a post request to the server to create the user and return the token
    // Store that token in local storage
    // Finally redirect to the home page after everything else is done

    router.push('/')
  }

  return (
    <form
      className="w-80 flex flex-col justify-between p-3 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <input
          type="text"
          id="username"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          required
          placeholder="Choose a username"
          {...register('username')}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="password"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          placeholder="Password"
          required
          {...register('password')}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="confirmPassword"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          placeholder="Confirm Password"
          required
          {...register('confirmPassword')}
        />
      </div>
      <button
        type="submit"
        className="bg-rose-500 hover:bg-rose-600 focus:ring-2 focus:ring-rose-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white"
      >
        Log In
      </button>
    </form>
  )
}

export default Form
