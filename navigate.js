import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './MainPage';
import Board from './Board';


const Stack = createStackNavigator();

const SearchSong = () => {
    const options = {headerShown: false}
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="MainPage" >
                <Stack.Screen 
                    name="MainPage" 
                    component={MainPage} 
                    options={options}/>
                <Stack.Screen 
                    name="Board" 
                    component={Board} 
                    options={options} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SearchSong;