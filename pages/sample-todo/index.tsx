import { SampleTodo } from '@prisma/client'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import useSWR, { useSWRConfig } from 'swr'
import {
  deleteSampleTodoReqBody,
  postSampleTodoReqBody,
} from '../api/sample-todo'

const fetcher = async () => {
  const res = await fetch('/api/sample-todo')
  return res.json()
}

const Page = () => {
  const [session, loading] = useSession()
  const { data, error } = useSWR('/api/sample-todo', fetcher)
  const { mutate } = useSWRConfig()

  if (loading) return <>loading</>
  if (error) return <>error</>
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
        {data?.sampleTodos.map((sampleTodo: SampleTodo) => (
          <li key={sampleTodo.id}>
            <button
              onClick={async () => {
                const reqBody: deleteSampleTodoReqBody = { id: sampleTodo.id }
                await fetch('/api/sample-todo', {
                  method: 'DELETE',
                  body: JSON.stringify(reqBody),
                })
                await mutate('/api/sample-todo')
              }}
            >
              done
            </button>{' '}
            {sampleTodo.title}
          </li>
        ))}
      </ul>
      <label>task title</label>
      <input id="title" />
      <button
        onClick={async () => {
          const titleInput = document.getElementById(
            'title'
          ) as HTMLInputElement
          const reqBody: postSampleTodoReqBody = { title: titleInput.value }
          await fetch('/api/sample-todo', {
            method: 'POST',
            body: JSON.stringify(reqBody),
          })
          await mutate('/api/sample-todo')
          titleInput.value = ''
        }}
      >
        submit
      </button>
    </>
  )
}

export default Page
