import { FlatList } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


import Songs from "./Components/Songs";

const MainPage = (props) => {
    /* https://latouchemusicale.com/en/easiest-piano-songs-with-letters/ */
    const songs = [
        {
            author : "Little Star",
            title: "Twinkle Twinkle",
            notes: ["c3","c3","g3","g3","a3","a3","g3","f3","f3","e3","e3","d3","d3","c3","g3","g3","f3","f3","e3","e3","d3","g3","g3","f3","f3","e3","e3","d3","c3","g3","g3","a3","g3","f3","f3","e3","e3","d3","c3"],
            profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "Tradiational Song",
            title: "Happy Birthday to You",
            notes: ["g3","a3","g3","c3","b3","g3","g3","a3","g3","d3","c3","g3","g3","g3","e3","c3","c3","b3","a3","f3","f3","e3","c3","d3","c3"],
            profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "John Williams",
            title: "Star Wars Theme",
            notes: ["c3","g3","f3","e3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","f3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","f3","e3","d3","c3","d3","e3","d3","f3","e3","d3","c3","g3","d3","f3","e3","d3","c3","c3","c3","d3","e3","d3","d3","e3","d3","c3","a3","g3","g3","f3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","d3","c3","g3","f3","e3","f3","d3","c3","c3","c3"],
            profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "Ode to Joy",
            title: "Ludwig van Beethoven",
            notes: [
                "e3","e3","f3","g3","g3","f3","e3","d3","c3","c3","d3","e3","e3","d3","e3","f3","g3","g3","f3","e3","d3","c3","c3","d3","e3","d3","e3","c3","d3","e3","f3","e3","c3","d3","e3","f3","e3","d3","c3","d3","g3","g3","e3","e3","f3","g3","g3","f3","e3","d3","c3","d3","e3","d3","c3"],
                profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "James Lord Pierpont",
            title: "Jingle Bells",
            notes: ["e3","d3","c3","e3","d3","c3","f3","e3","d3","g3","f3","d3","e3","d3","c3","e3","d3","c3","f3","e3","d3","g3","g3","g3","a3","g3","f3","d3","g3","e3","e3","e3","e3","e3","e3","e3","e3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","f3","g3","d3","e3","f3","f3","f3","e3","e3","e3","d3","d3","e3","d3","g3","e3","e3","e3","e3","e3","g3","d3","e3","f3","f3","f3","e3","e3","e3","g3","g3","f3","d3"],
            profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "Traditional Song",
            title: "Bella Ciao",
            notes: ["e3","a3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","b3","a3","c3","b3","a3","e3","e3","e3","d3","e3","f3","f3","e3","d3","f3","e3","e3","d3","c3","b3","e3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","b3","a3","e3","e3","e3","d3","e3","f3","f3","e3","d3","f3","e3","d3","c3","b3","e3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","b3","a3","e3","e3","e3","d3","e3","f3","f3","e3","d3","f3","e3","d3","c3","b3","e3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","a3","e3","a3","b3","c3","b3","a3","e3","e3","e3","d3","e3","f3","f3","e3","d3","f3","e3","e3","d3","c3","b3","e3","b3","c3","a3"],
            profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "Sarah Josepha Hale",
            title: "Mary Had a Little Lamb",
            notes: ["e3","d3","c3","d3","e3","e3","e3","d3","d3","e3","g3","g3","e3","d3","c3","d3","e3","e3","e3","d3","e3","d3","e3","d3","c3","e3","d3","c3","d3","e3","e3","e3","d3","d3","e3","g3","g3","e3","d3","c3","d3","e3","e3","e3","e3","d3","d3","e3","d3","c3"
            ],
            profile: require('../../assets/alam-walker-faded.jpg')
        },
        {
            author : "Traditional Song",
            title: "London Bridge Is Falling Down",
            notes: ["d3","e3","d3","c3","c3","d3","c3","d3","d3","e3","d3","c3","c3","d3","d3" , "d3","e3","d3","c3","c3","d3","c3","d3","d3","e3","d3","c3","c3","d3","d3"],
            profile: require('../../assets/alam-walker-faded.jpg')
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