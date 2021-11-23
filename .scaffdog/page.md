---
name: 'page'
root: 'pages'
output: '**/*'
ignore: []
questions:
  directory: 'Parent directory?'
  name: 'Component name?.'
---

# `{{ inputs.directory }}/{{ inputs.name }}.tsx`

```tsx
import React from 'react'
import { prisma } from '../../lib/prisma'
import { getSession, useSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

const {{ inputs.name }} = () => {
  const [session, loading] = useSession()

  return (
    <div>
      {{ inputs.name }}
    </div>
  )
}

export default {{ inputs.name }}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      props: {
        session: false,
      },
    }
  }

  return {
    props: {
      session: true,
    },
  }
}
```
