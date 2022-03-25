import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadForm } from '../components/form'

// Note: everything should be in the upload form component when I think about it
export default function Upload() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with these files
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div className="bg-slate-100 flex flex-col">
      <div className="bg-white rounded-lg shadow-md flex flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-4">
        <section className="w-full flex md:flex-row flex-col">
          <div>
            <h1 className="text-2xl font-bold">Upload</h1>
            <span className="text-xl text-slate-400">
              Post a video or image to your account
            </span>
          </div>
          <div>Toggle Btn</div>
        </section>
        <section className="flex md:flex-row flex-col">
          <div {...getRootProps()} className="flex flex-col">
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="border-4 border-dashed border-slate-300 rounded-md">
                <p>Drop the files here ...</p>
              </div>
            ) : (
              <div className="border-4 border-dashed border-slate-300 rounded-md">
                <span>Select video to upload</span>
              </div>
            )}
          </div>
          <div>
            <UploadForm />
          </div>
        </section>
      </div>
    </div>
  )
}
