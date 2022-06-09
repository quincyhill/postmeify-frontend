import { useForm, SubmitHandler } from 'react-hook-form'
import { Search } from 'react-bootstrap-icons'
import Router from 'next/router'

interface FormInput {
  query: string
}

const Form = () => {
  // Each character entry results in a query to the server to update results
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('query: ' + data.query)
    Router.push('/search?q=' + data.query)
  }

  console.log(watch('query'))

  return (
    <form
      className="w-80 flex flex-row text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <input
          type="text"
          id="name"
          className="bg-white border border-slate-300 rounded-lg block w-full p-2.5"
          required
          placeholder="Search Accounts"
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
