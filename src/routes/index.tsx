import React from 'react';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from '../screens/Login';
import { ComicList } from '../screens/ComicList';
import { MarvelList } from '../screens/MarvelList';
import { Profile } from '../screens/Profile';
import { Registration } from '../screens/Registration'
import { Home } from '../screens/Home'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ComicList" component={ComicList} />
            <Tab.Screen name="MarvelList" component={MarvelList} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}


function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={MyTabs} />
        </Stack.Navigator>
    );
}

export const Router = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

{/* const RouteStack = createStackNavigator();

 export const Router = () =>{ 
     return (
        <RouteStack.Navigator screenOptions={{headerTransparent: true, headerShown:false}}>
           <RouteStack.Screen name="Login" component={Login}/>
       </RouteStack.Navigator>
    )
 } */
}