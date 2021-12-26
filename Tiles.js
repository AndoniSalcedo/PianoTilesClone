import { forwardRef, useImperativeHandle, useRef } from "react"
import { StyleSheet, Animated,  Dimensions, StatusBar, Easing } from "react-native"

import Tile from "./Tile"

let wh = Dimensions.get('window').height + StatusBar.currentHeight

const Tiles = ({data,musicPlayer},ref) => {  

    useImperativeHandle(ref,()=> ({
        onStart: () => {
            animation.start()
            setInterval(handlerTime,50);
        }
    }))
    //TODO: change dl
    let dl = data.tiles.length * 175
    const value = useRef(new Animated.Value(-dl)).current;

    
    //Posible solution change by ref variable
    const countRef = useRef(0)
    const animatedRef = useRef(null)
   
    const tilesRef = useRef(Array(data.tiles.length))

    let cons = data.speed

    //TODO: Optimice this
    /* 
    let v = ( dl + wh )/( dl * cons )

    let dt = 175/v

    let di = (wh / v) + dt / 2 
    */

    
    //TODO: cmon you can do it better
    const handlerTime = () => {
        animatedRef.current.measure((x, y, width, height, pageX, pageY) => {
            if(pageY > -dl + wh + (countRef.current*175) + 50){
                
                if(!tilesRef.current[countRef.current].checkStatus()){
                    console.log("game over")
                    onGameOver()
                }
                countRef.current += 1
            }
        });
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
        return <Tile ref={el => tilesRef.current[index] = el} tile={value} key={index} onGameOver={onGameOver} musicPlayer={musicPlayer}/>
    })

    return(
        <Animated.View style={[styles.container,
            {
                transform: [{translateY: value}]
            }]}
            ref={animatedRef}
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