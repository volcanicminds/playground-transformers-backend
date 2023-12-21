module.exports = {
  config: {
    title: 'Sample pipeline',
    description: 'Sample pipeline',
    controller: 'controller',
    enable: true,
    tags: ['Partners']
  },
  routes: [
    {
      method: 'POST',
      path: '/',
      roles: [],
      handler: 'pipeline.textGeneration',
      middlewares: [],
      config: {
        title: 'Text Generation',
        description: 'Text generation pipeline',
        query: { $ref: 'textGenerationSchema' },
        response: {
          200: {
            description: 'Response',
            $ref: 'textGenerationResponseSchema#'
          }
        }
      }
    }
  ]
}
