import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black'>
      <div className='text-center space-y-6'>
        <h1 className='text-4xl font-bold text-white'>Welcome to Our App</h1>
        <div className='flex gap-4'>
          <Link
            href='/articles'
            className='px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors'
          >
            Go to Articles
          </Link>
          <Link
            href='/profile/settings'
            className='px-6 py-2 bg-zinc-900 text-zinc-400 rounded-md hover:bg-zinc-800 hover:text-white transition-colors'
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
