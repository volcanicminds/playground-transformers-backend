import { FastifyReply, FastifyRequest } from '@volcanicminds/backend'

export async function preSerialization(req: FastifyRequest, res: FastifyReply, payload) {
  return payload
}
