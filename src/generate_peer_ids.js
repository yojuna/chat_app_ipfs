const PeerId = require('peer-id')

const id = await PeerId.create({ bits: 1024, keyType: 'RSA' })

console.log('the generated IPFS peer id:')
console.log(JSON.stringify(id.toJSON(), null, 2))
