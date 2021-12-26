import { Audio } from 'expo-av';


const a3 = require('./assets/a3.mp3')
const a4 = require('./assets/a4.mp3')
const a5 = require('./assets/a5.mp3')
const b3 = require('./assets/b3.mp3')
const b4 = require('./assets/b4.mp3')
const b5 = require('./assets/b5.mp3')
const c3 = require('./assets/c3.mp3')
const c4 = require('./assets/c4.mp3')
const c5 = require('./assets/c5.mp3')
const d3 = require('./assets/d3.mp3')
const d4 = require('./assets/d4.mp3')
const d5 = require('./assets/d5.mp3')
const e3 = require('./assets/e3.mp3')
const e4 = require('./assets/e4.mp3')
const e5 = require('./assets/e5.mp3')
const f3 = require('./assets/f3.mp3')
const f4 = require('./assets/f4.mp3')
const f5 = require('./assets/f5.mp3')
const g3 = require('./assets/g3.mp3')
const g4 = require('./assets/g4.mp3')
const g5 = require('./assets/g5.mp3')

class MusicPlayer {

    async initialize(){
        let sound
        sound  = await Audio.Sound.createAsync(a3)
        this.a3 = sound.sound
        sound  = await Audio.Sound.createAsync(a4)
        this.a4 = sound.sound
        sound  = await Audio.Sound.createAsync(a5)
        this.a5 = sound.sound
        sound  = await Audio.Sound.createAsync(b3)
        this.b3 = sound.sound
        sound  = await Audio.Sound.createAsync(b4)
        this.b4 = sound.sound
        sound  = await Audio.Sound.createAsync(b5)
        this.b5 = sound.sound
        sound  = await Audio.Sound.createAsync(c3)
        this.c3 = sound.sound
        sound  = await Audio.Sound.createAsync(c4)
        this.c4 = sound.sound
        sound  = await Audio.Sound.createAsync(c5)
        this.c5 = sound.sound
        sound  = await Audio.Sound.createAsync(d3)
        this.d3 = sound.sound
        sound  = await Audio.Sound.createAsync(d4)
        this.d4 = sound.sound
        sound  = await Audio.Sound.createAsync(d5)
        this.d5 = sound.sound
        sound  = await Audio.Sound.createAsync(e3)
        this.e3 = sound.sound
        sound  = await Audio.Sound.createAsync(e4)
        this.e4 = sound.sound
        sound  = await Audio.Sound.createAsync(e5)
        this.e5 = sound.sound
        sound  = await Audio.Sound.createAsync(f3)
        this.f3 = sound.sound
        sound  = await Audio.Sound.createAsync(f4)
        this.f4 = sound.sound
        sound  = await Audio.Sound.createAsync(f5)
        this.f5 = sound.sound
        sound  = await Audio.Sound.createAsync(g3)
        this.g3 = sound.sound
        sound  = await Audio.Sound.createAsync(g4)
        this.g4 = sound.sound
        sound  = await Audio.Sound.createAsync(g5)
        this.g5 = sound.sound
    }

    async onPlay(note){
        switch(note){
            case "a3":
                this.a3.replayAsync()
            break
            case "a4":
                this.a4.replayAsync()
            break
            case "a5":
                this.a5.replayAsync()
            break
            case "b3":
                this.b3.replayAsync()
            break
            case "b4":
                this.b4.replayAsync()
            break
            case "b5":
                this.b5.replayAsync()
            break
            case "c3":
                this.c3.replayAsync()
            break
            case "c4":
                this.c4.replayAsync()
            break
            case "c5":
                this.c5.replayAsync()
            break
            case "d3":
                this.d3.replayAsync()
            break
            case "d4":
                this.d4.replayAsync()
            break
            case "d5":
                this.d5.replayAsync()
            break
            case "e3":
                this.e3.replayAsync()
            break
            case "e4":
                this.e4.replayAsync()
            break
            case "e5":
                this.e5.replayAsync()
            break
            case "f3":
                this.f3.replayAsync()
            break
            case "f4":
                this.f4.replayAsync()
            break
            case "f5":
                this.f5.replayAsync()
            break
            case "g3":
                this.g3.replayAsync()
            break
            case "g4":
                this.g4.replayAsync()
            break
            case "g5":
                this.g5.replayAsync()
            break
        }

    }

    async terminate(){
        this.a3.unloadAsync()
        this.a4.unloadAsync()
        this.a5.unloadAsync()
        this.b3.unloadAsync()
        this.b4.unloadAsync()
        this.b5.unloadAsync()
        this.c3.unloadAsync()
        this.c4.unloadAsync()
        this.c5.unloadAsync()
        this.d3.unloadAsync()
        this.d4.unloadAsync()
        this.d5.unloadAsync()
        this.e3.unloadAsync()
        this.e4.unloadAsync()
        this.e5.unloadAsync()
        this.f3.unloadAsync()
        this.f4.unloadAsync()
        this.f5.unloadAsync()
        this.g3.unloadAsync()
        this.g4.unloadAsync()
        this.g5.unloadAsync()
    }
}

global.MusicPlayer = new MusicPlayer()