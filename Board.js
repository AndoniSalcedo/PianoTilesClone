import { View ,StyleSheet, Dimensions  } from "react-native"

import { LinearGradient } from 'expo-linear-gradient';
import Tiles from "./Tiles";


const Board = () => {

    return(
        <LinearGradient 
            style={styles.container} 
            colors={["#8f192d","#0788b3","#BBB4FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {/* BackGround Lines only for styling*/}
            <View style={styles.board}>
                <View style={styles.column}/>
                <View style={styles.column}/>
                <View style={styles.column}/>
                <View style={styles.column}/>
            </View>

            <Tiles/>

        </LinearGradient>
      
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    board: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        height: "100%",
        width: Dimensions.get('window').width / 4,
        borderColor: "white",
        borderLeftWidth: 1,
        borderRightWidth: 1
      }
  });


export default Board
