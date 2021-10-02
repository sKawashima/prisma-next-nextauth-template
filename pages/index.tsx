import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from 'antd'

const indexPage = () => {
  const [session, loading] = useSession()

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <Button onClick={() => signIn()}>Sign in</Button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      )}
    </>
  )
}

export default indexPage
