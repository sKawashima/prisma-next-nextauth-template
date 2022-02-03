import { useSession } from 'next-auth/client'
import Link from 'next/link'
import { postSampleTodoReqBody } from '../api/sample-todo'

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
        onClick={async () => {
          const title = (document.getElementById('title') as HTMLInputElement)
            .value
          const reqBody: postSampleTodoReqBody = { title }
          await fetch('/api/sample-todo', {
            method: 'POST',
            body: JSON.stringify(reqBody),
          })
        }}
      >
        submit
      </button>
    </>
  )
}

export default Page
