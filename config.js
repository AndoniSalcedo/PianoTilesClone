import { Audio } from 'expo-av'

const DO = await Audio.Sound.createAsync(require('./assects/Do.mp3'))
const RE = await Audio.Sound.createAsync(require('./assects/Do.mp3'))
const MI = await Audio.Sound.createAsync(require('./assects/Do.mp3'))
const FA = await Audio.Sound.createAsync(require('./assects/Do.mp3'))
const SOL = await Audio.Sound.createAsync(require('./assects/Do.mp3'))
const LA = await Audio.Sound.createAsync(require('./assects/Do.mp3'))
const SI = await Audio.Sound.createAsync(require('./assects/Do.mp3'))

export {DO,RE,MI,FA,SOL,LA,SI} 