import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { StyleSheet, Animated,  Dimensions, StatusBar, Easing } from "react-native"
import Tile from "./Tile"

const Columns = 4

//TODO: ponerlo como variable de estado y pasado por prop
const data = {
    tiles: [[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,0,1]]
}

let dl = data.tiles.length * 175

let wh = Dimensions.get('window').height + StatusBar.currentHeight

let value = new Animated.Value(-dl)

const Tiles = (props,ref) => {  

    const [num,setNum] = useState(0)
   
    const tilesRef = useRef([])

    tilesRef.current = tilesRef.current.slice(0,data.tiles.length)

    useImperativeHandle(ref,()=> ({
        start: () => {
            animation.start()
            setTimeout(handlerTime, di);
        }
    }))

    let cons = 2
    
    let v = ( dl + wh )/( dl * cons )

    let dt = 175/v

    let di = (wh / v) + dt / 2

    

    
    const handlerTime = () => {
        //check if is checked
        if(!tilesRef.current[num].checkStatus()){
            onGameOver()
            
            
        }else{
            setNum(num+1)
            setTimeout(handlerTime, dt)
        }
        
    }

    

    const animation = Animated.timing(value, {
        toValue: wh,
        duration: dl * cons,
        useNativeDriver: true,
        easing: Easing.linear
    })

    const onGameOver = () => {
        animation.stop()
    }

    
    const tiles = data.tiles.map((value,index) => {
        return <Tile ref={el => tilesRef.current[index] = el} tile={value} key={index} onGameOver={onGameOver}/>
    })

    return(
        <Animated.View style={[styles.container,
            {
                transform: [{translateY: value}]
            }]}
            >

           {tiles}
        </Animated.View>
        )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column-reverse'
    }
});

export default forwardRef(Tiles)