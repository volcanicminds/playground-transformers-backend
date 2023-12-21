import { FastifyReply, FastifyRequest } from '@volcanicminds/backend'
import { TextGenerationPipeline } from './TextGenerationPipeline'

export async function textGeneration(req: FastifyRequest, reply: FastifyReply) {
  const { text } = req.data()
  if (!(text?.length > 0)) {
    return reply.status(400).send("The 'text' field is missing")
  }

  const answer = await TextGenerationPipeline.execute({ text })
  const response = { text, answer: answer || 'Something went wrong' }
  return reply.type('application/json').code(200).send(response)
}
