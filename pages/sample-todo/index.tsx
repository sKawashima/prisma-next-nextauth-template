import { useSession } from 'next-auth/client'
import Link from 'next/link'

const Page = () => {
  const [session, loading] = useSession()

  if (loading) return <>loading</>

  if (!session)
    return (
      <>
        unauthorized <Link href="/">back to top</Link>
      </>
    )

  return (
    <>
      <h1>Sample: Todo</h1>
      <ul>
        <li>temp todo</li>
        <li>temp todo</li>
      </ul>
      <label>task title</label>
      <input id="title" />
      <button
        onClick={() => {
          const title = (document.getElementById('title') as HTMLInputElement)
            .value
          console.log(title)
        }}
      >
        submit
      </button>
    </>
  )
}

export default Page
