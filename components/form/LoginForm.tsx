import { useForm, SubmitHandler } from 'react-hook-form'
import type { LoginFormInput } from '../../lib/types'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'

// Here is the function
import { login } from '../../lib/redux/actions/auth'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>()

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log('username: ' + data.username)
    console.log('password: ' + data.password)
  }

  return (
    <form
      className="w-80 flex flex-col justify-between p-3 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <input
          type="text"
          id="name"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          required
          placeholder="Username"
          {...register('username')}
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          id="email"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          placeholder="Password"
          required
          {...register('password')}
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
