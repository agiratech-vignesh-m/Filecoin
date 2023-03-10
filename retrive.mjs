import { Web3Storage, getFilesFromPath } from 'web3.storage'
 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdmNTg1QTQ0ZmNBQ0QzMmE4RDNkMjExYjdlMkQyOUZDZTg3Njc3QzAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzgzNTg0ODkzNTEsIm5hbWUiOiJUZXN0aW5nIHN0b3JhZ2UifQ.rOX8F-jrUQRdNCS8uQFKvyEA327vIUfhUXNGCm0sUOM'
const client = new Web3Storage({ token })
 
 async function retrieveFiles () {
   const cid =
      'bafybeibxsrpjkoa5edi76a5nvqwnocils725rmrdy5mjjtkl6zmopnrzqa'
 
   const res = await client.get(cid)
   const files = await res.files()
 
   for (const file of files) {
     console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
   }
 }
 
 retrieveFiles()