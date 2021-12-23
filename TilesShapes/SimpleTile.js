import { TouchableWithoutFeedback, View, StyleSheet } from "react-native"

const SimpleTile = (props) => {

    const handleSuccess = () => {
        props.handlePressSuccess()
    } 

    const tile = props.tile.map((value,index) => {
        return ( value ? 
            <TouchableWithoutFeedback 
                key={index} 
                onPress={handleSuccess}> 
                    <View style={[styles.tile,{backgroundColor: 'black', opacity: props.successOpacity}]} /> 
            </TouchableWithoutFeedback>
        : 
            <TouchableWithoutFeedback 
                key={index} 
                onPress={props.handlePressFail}>
                    <View style={[styles.tile,{backgroundColor: 'red', opacity: props.failOpacity}]}/>
            </TouchableWithoutFeedback>
        )
    })
    return(
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
        width: "25%"
    }
});

export default SimpleTile