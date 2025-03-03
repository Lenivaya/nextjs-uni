import ArticlesNav from '../../components/ArticlesNav'

export default function ArticlesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='space-y-6'>
      <ArticlesNav />
      <div className='py-2'>{children}</div>
    </div>
  )
}
