import { useState } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native"

import InViewPort from '@coffeebeanslabs/react-native-inviewport'

const Columns = 4

const Tile = (props) => {  
    
    const [clicked, setClicked] = useState(false);
    
    const [successOpacity, setSuccessOpacity] = useState(1)

    const [failOpacity, setFailOpacity] = useState(0)

    const [tileState, setTileState] = useState(0)

    const handlePressFail = () => {
        setFailOpacity(1)
        props.onGameOver()
    }

    const handlePressSuccess = () => {
        setSuccessOpacity(0.2)
        setClicked(true)
    }

    const checkTileIsVisible = (isVisible) => {
        if(isVisible && tileState === 0){
            setTileState(1)
        }
        if( !isVisible && tileState === 1 && !clicked){
            setFailOpacity(1)
            props.onGameOver()
        }
    }


    const tile = props.tile.map((value,index) => {
        return ( value ? 
            <TouchableWithoutFeedback style={styles.tile} key={index} onPress={() => {handlePressSuccess()}}>
                <InViewPort onChange={checkTileIsVisible}> 
                    {/* //TODO: solucionar esto */}    
                    <View style={{height: 175, width: Dimensions.get('window').width/4, backgroundColor: 'black', opacity: successOpacity}} /> 
                </InViewPort>
            </TouchableWithoutFeedback>
        : 
            <TouchableWithoutFeedback key={index} onPress={handlePressFail}>
                <View style={[styles.tile,{backgroundColor: 'red', opacity: failOpacity}]}/>
            </TouchableWithoutFeedback>
        )
    })
    return (
        <View style={styles.container}>  
            {tile}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 175,
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    tile: {
        //TODO: ponerlo en funcion de columns
        width: "25%"
    }
});

export default Tile