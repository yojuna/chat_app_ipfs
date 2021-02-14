'use strict'
/* eslint-disable no-console */
const PeerId = require('peer-id')
const PeerInfo = require('peer-info')
const Node = require('./libp2p_bundle')
const chalk = require('chalk');
const emoji = require('node-emoji')
PeerId.createFromJSON(require('./ids/nodeOne'), (err, peerId) => {
    if (err) {
        throw err
    }
    const peerInfo = new PeerInfo(peerId)
    peerInfo.multiaddrs.add('/ip4/127.0.0.1/tcp/10333')
    const nodeListener = new Node({ peerInfo })
nodeListener.start((err) => {
        if (err) {
            throw err
        }
console.log('Node 1 listening on: ');
peerInfo.multiaddrs.forEach((ma) => {
            console.log(ma.toString() + '/p2p/' + peerId.toB58String())
        })
console.log('Trying to connect to node 2');
    })
})

