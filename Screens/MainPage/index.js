import { FlatList } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


import Songs from "./Components/Songs";

const MainPage = (props) => {

    const songs = [
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        },
        {
            author : "Alan Walker",
            title: "Faded",
        }
    ]
    return (
        <LinearGradient
            style={{ width: '100%', height: '100%' }}
            colors={["#8f192d", "#0788b3", "#BBB4FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <FlatList
                data={songs}
                renderItem={({ item }) => <Songs data={item} navigation={props.navigation}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </LinearGradient>
    )
}

export default MainPage;