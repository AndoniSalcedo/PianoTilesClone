import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { StyleSheet, Animated,  Dimensions, StatusBar, Easing } from "react-native"

import Tile from "./Tile"

let wh = Dimensions.get('window').height + StatusBar.currentHeight

const Tiles = (props,ref) => {  

    useImperativeHandle(ref,()=> ({
        onStart: () => {
            animation.start(onFinish)
            setTimeout(handlerTime,50)
        }
    }))

    //TODO: change dl
    let dl = props.data.tiles.length * 175
    const value = useRef(new Animated.Value(-dl)).current;

    const countRef = useRef(0)
    const animatedRef = useRef(null)
   
    const tilesRef = useRef(Array(props.data.tiles.length))

    const handlerTime = async() => {
        animatedRef.current.measure((x, y, width, height, pageX, pageY) => {
            if(pageY > -dl + wh + (countRef.current*175)){
                if(!tilesRef.current[countRef.current].checkStatus()){
                    console.log("game over")
                    onGameOver()
                }else{
                    setTimeout(handlerTime,50)
                }
                countRef.current += 1
            }else{
                setTimeout(handlerTime,50)
            }
        });
    }

    const animation = Animated.timing(value, {
        toValue: wh,
        duration: dl * props.data.speed,
        useNativeDriver: true,
        easing: Easing.linear
    })

    const onGameOver = () => {
        animation.stop()
        /* On animation stop onFinishCallback is called */
    }

    const onFinish = () => {
        console.log("onfinish");
        props.onFinish()
    }
    
    const tiles = props.data.tiles.map((value,index) => {
        return <Tile ref={el => tilesRef.current[index] = el} tile={value} key={index} onGameOver={onGameOver}/>
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