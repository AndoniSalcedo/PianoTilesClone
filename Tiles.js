import { StyleSheet, Animated,  Dimensions, StatusBar } from "react-native"
import Tile from "./Tile"

const Columns = 4

//TODO: ponerlo como variable de estado y pasado por prop
const data = {
    tiles: [[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,0,1]]
}

let dl = data.tiles.length * 175

let value = new Animated.Value(-dl)

const Tiles = (props) => {    

    const animation = Animated.timing(value, {
        toValue: Dimensions.get('window').height + StatusBar.currentHeight,
        duration: 10000,
        useNativeDriver: true,
    })

    animation.start()

    const onGameOver = () => {
        animation.stop()
    }

    
    const tiles = data.tiles.map((value,index) => {
        return <Tile tile={value} key={index} onGameOver={onGameOver}/>
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

export default Tiles