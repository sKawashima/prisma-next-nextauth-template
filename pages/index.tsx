import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

const IndexPage = () => {
  const [session, loading] = useSession()

  if (loading) return <>loading</>

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <Link href="/sample-todo">sample todo</Link> <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}

export default IndexPage
