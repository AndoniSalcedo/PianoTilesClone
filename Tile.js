import { forwardRef, useImperativeHandle, useState } from "react"
import SimpleTile from "./TilesShapes/SimpleTile"

const Tile = (props,ref) => {      

    useImperativeHandle(ref, () => ({
        checkStatus: () => {
            return clicked
        }
    }))
    
    const [clicked, setClicked] = useState(false);
    
    const [successOpacity, setSuccessOpacity] = useState(1)

    const [failOpacity, setFailOpacity] = useState(0)

    const handlePressFail = () => {
        setFailOpacity(1)
        props.onGameOver()
    }

    const handlePressSuccess = async() => {
        await global.MusicPlayer.onPlay(props.tile.note)
        setSuccessOpacity(0.2)
        setClicked(true)
    }
    switch(props.tile.type){
        case "simple":
            return(
                <SimpleTile
                    handlePressSuccess={handlePressSuccess} 
                    handlePressFail={handlePressFail}
                    failOpacity={failOpacity}
                    successOpacity={successOpacity}
                    tile={props.tile.lyric}
                />
            )
    }
}



export default forwardRef(Tile)