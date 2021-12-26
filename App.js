import { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native"


import MusicPlayer from "./MusicPlayer";
import SearchSong from "./navigate";


const App = () => {

	const [load, setLoad] = useState(false)

	useEffect(() => {
		async function init() {
			/* Mount Music Player */
			await global.MusicPlayer.initialize()

			setLoad(true)
		}
		init()

		return () => {
			/* Unmount Music Player */
			global.MusicPlayer.terminate()
		}
	}, [])

	if (!load) {
		return (
			/* //TODO: */
			<View style={{
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<Text>Loading...</Text>
				<StatusBar style="auto" />
			</View>
		)
	} else {
		return (
			<SearchSong />
		);
	}
}

export default App

