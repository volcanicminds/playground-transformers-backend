export const textGenerationSchema = {
  $id: 'textGenerationSchema',
  type: 'object',
  nullable: true,
  properties: {
    text: { type: 'string', description: 'Text to complete, f.e. Once upon a time, ' }
  }
}

export const textGenerationResponseSchema = {
  $id: 'textGenerationResponseSchema',
  type: 'object',
  nullable: true,
  properties: {
    text: { type: 'string', description: 'Text to complete' },
    answer: { type: 'string', description: 'Generated text' }
  }
}
