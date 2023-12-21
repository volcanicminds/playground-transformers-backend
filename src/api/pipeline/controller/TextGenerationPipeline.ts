// import { pipeline } from '@xenova/transformers'
// const { pipeline } = import('@xenova/transformers')

export class TextGenerationPipeline {
  static task = 'text-generation'
  static model = 'Xenova/distilgpt2'
  static instance = null

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      const { pipeline } = await Function('return import("@xenova/transformers")')()
      this.instance = pipeline(this.task, this.model, { progress_callback })
    }

    return this.instance
  }

  static async execute({ text }) {
    const executor: any = await this.getInstance()
    let answer = await executor(text, {
      temperature: 2,
      max_new_tokens: 50,
      repetition_penalty: 5,
      no_repeat_ngram_size: 2,
      num_beams: 2,
      num_return_sequences: 1
    })
    answer = answer?.length > 0 ? answer[0] : answer
    return answer?.generated_text || answer
  }
}
