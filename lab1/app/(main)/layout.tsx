import MainNav from '../components/MainNav'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-black'>
      <MainNav />
      <main className='max-w-7xl mx-auto px-6 py-8 text-white'>{children}</main>
    </div>
  )
}
