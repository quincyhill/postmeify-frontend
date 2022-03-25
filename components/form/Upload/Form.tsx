import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInput {
  username: string
  password: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('username: ' + data.username)
    console.log('password: ' + data.password)
  }

  return (
    <form
      className="w-80 flex flex-col justify-between p-3 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <span className="text-4xl font-semibold">Postmeify</span>
      </div>
      <div className="mb-6">
        <input
          type="text"
          id="name"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          required
          placeholder="Phone number, username, or email"
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
        className="bg-rose-600 focus:ring-4 focus:ring-rose-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Log In
      </button>
    </form>
  )
}

export default Form
