
// store.mjs

import { Web3Storage, getFilesFromPath } from 'web3.storage'

// const token = process.env.API_TOKEN
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdmNTg1QTQ0ZmNBQ0QzMmE4RDNkMjExYjdlMkQyOUZDZTg3Njc3QzAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzgzNTg0ODkzNTEsIm5hbWUiOiJUZXN0aW5nIHN0b3JhZ2UifQ.rOX8F-jrUQRdNCS8uQFKvyEA327vIUfhUXNGCm0sUOM'
const client = new Web3Storage({ token })

async function storeFiles () {
  const files = await getFilesFromPath('./data')
  const cid = await client.put(files)
  console.log(cid)
}

storeFiles()