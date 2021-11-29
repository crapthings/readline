import { createReadStream } from 'fs'
import { createInterface } from 'readline'

export const read = (online) => (filepath) => {
  const _reader = createInterface({
    input: createReadStream(filepath)
  })

  if (online) {
    _reader.on('line', online)
  }

  return _reader
}

export const readJson = (online) => (filepath) => read((line) => online(JSON.parse(line)))(filepath)
