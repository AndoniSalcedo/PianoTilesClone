import { TouchableWithoutFeedback, View, Text, StyleSheet, Image } from "react-native"

const faded = require('../../../assets/alam-walker-faded.jpg')

const Songs = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => { props.navigation.navigate("Board") }}>
            <View style={styles.container}>

                <Image style={styles.image} source={faded} />

                <View style={styles.info}>
                    <Text style={styles.title}> {props.data.title} </Text>
                    <Text>{props.data.author} </Text>
                </View>
                <View style={styles.play}>
                    <Text style={{ height: 20 }}>JUGAR</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 100,

        display: "flex",
        flexDirection: "row"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    info: {
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    title: {
        fontWeight: 'bold'
    },
    play: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
    },
})

export default Songs