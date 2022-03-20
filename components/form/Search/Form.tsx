import { useForm, SubmitHandler } from 'react-hook-form'
import { Search } from 'react-bootstrap-icons'

interface FormInput {
  query: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('query: ' + data.query)
  }

  return (
    <form
      className="w-80 flex flex-row text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <input
          type="text"
          id="name"
          className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-transparent rounded-lg block w-full p-2.5"
          required
          placeholder="Phone number, username, or email"
          {...register('query')}
        />
      </div>
      <button
        type="submit"
        className="focus:ring-4 font-medium rounded-lg text-sm pl-2"
      >
        <Search className="w-6 h-6" />
      </button>
    </form>
  )
}

export default Form
