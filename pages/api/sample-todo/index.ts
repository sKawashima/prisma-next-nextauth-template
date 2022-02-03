import { PrismaClient } from '@prisma/client'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export type postSampleTodoReqBody = {
  title: string
}

const api: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req })
  if (!session) return res.status(500).json({ error: 'Error: Unauthorized' })

  if (req.method === 'POST') {
    const reqBody: postSampleTodoReqBody = JSON.parse(req.body)

    const prisma = new PrismaClient()
    const sampleTodo = await prisma.sampleTodo.create({
      data: {
        title: reqBody.title,
        author: {
          connect: {
            id: session.user.id,
          },
        },
      },
    })

    if (!sampleTodo)
      return res.status(500).json({ error: 'Error: Cannot create sampleTodo' })

    return res.status(200).json(sampleTodo)
  } else if (req.method === 'GET') {
    const prisma = new PrismaClient()

    const sampleTodos = await prisma.sampleTodo.findMany({
      where: {
        author: session.user,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
    return res.status(200).json({ sampleTodos })
  }
}

export default api
