import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import Welcome from '../demo/Welcome';
import Demo from '../demo/Demo';
import Screen1 from '../Screen/Screen1';
import Screen2 from '../Screen/Screen2';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { AppContext } from './AppContext';

// login, register =>stack
const Stack = createNativeStackNavigator();
const Users = () => {
    return (
        <Stack.Navigator initialRouteName='Screen1' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    )
}



//list news, profile, news manager =>tab
const Tab = createBottomTabNavigator();
const Main = () => {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Welcome" component={Welcome} options={{
                title: "UseState",
                tabBarIcon: () => (<Image source={require('../assets/Setting.png')} />)
            }} />
            <Tab.Screen name="Demo" component={Demo} options={{ title: "UseSEffect",
                tabBarIcon: () => (<Image source={require('../assets/Setting.png')}  />)
            }} />
            

        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    return (

        <>
            {
                isLogin == false ? <Users /> : <Main />
            }
        </>

    )
}

export default AppNavigator