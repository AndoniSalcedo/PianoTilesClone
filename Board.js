import { useRef } from "react";
import { View ,StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import Tiles from "./Tiles";

const Board = (props) => {
    /* At the moment the data is created here */
    const createData = (song) => {
        let data = {tiles: [], speed : 2.5}
        let initialValue = Math.floor(Math.random() * 4);
        for(let i = 0; i < song.length; i++) {
            let max = 3
            let min = 1
            
            let rand = Math.floor(Math.floor(Math.random() * (max - min)) + min);
            let lyric = [0,0,0,0]
            initialValue = (initialValue + rand) % 4
            lyric[initialValue] = 1

            data.tiles.push({
                type: "simple",
                note: song[i],
                lyric: lyric
            })
        }
        return data
    }
    

    const data = createData(["g3","g3","d5","d5","e5","e5","d5","c5","c5","b3","b3","a3","a3","g3","g3","g3","d5","d5","e5","e5","d5","c5","c5","b3","b3","a3","d5","d5","c5","c5","b3","b3","a3","g3","g3","d5","d5","e5","e5","d5","c5","c5","b3","b3","a3","g3"])


    const onStart = async() => {
        myRef.current.onStart()
    } 

    const myRef = useRef(null)
    
        return(
            <LinearGradient 
                style={styles.container} 
                colors={["#8f192d","#0788b3","#BBB4FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                {/* BackGround Lines only for styling*/}
                <TouchableWithoutFeedback onPress={onStart}>
                    <View style={styles.board}>    
                        <View style={styles.column}/>
                        <View style={styles.column}/>
                        <View style={styles.column}/>
                        <View style={styles.column}/>
                    </View>
                </TouchableWithoutFeedback>

                <Tiles ref={myRef} data={data} musicPlayer={props.MusicPlayer}/>

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
    },
    centering: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20
    }
  });


export default Board
