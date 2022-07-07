import React from 'react';
import {Image} from "react-native";
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from '../screens/Login';
import { ComicList } from '../screens/ComicList';
import { MarvelList } from '../screens/MarvelList';
import { Profile } from '../screens/Profile';
import { Registration } from '../screens/Registration'
import { Home } from '../screens/Home'
import homeicon from '../assets/icons/homeicon.png'
import heromask from '../assets/icons/heromask.png'
import profileicon from '../assets/icons/profileicon.png'
import comicicon from '../assets/icons/comicicon.png'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle:{backgroundColor:'#000'},
            tabBarActiveTintColor:'#FFF',
          }}>
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon:({color})=>(
                        <Image 
                            resizeMode='contain'
                            style={{width:30, tintColor:'#fff'}}
                            source={homeicon}
                        />
                    )
                }}
            /> 
            <Tab.Screen name="ComicList" component={ComicList} 
                options={{
                    tabBarIcon:({color})=>(
                        <Image 
                            resizeMode='contain'
                            style={{width:30, tintColor:'#fff'}}
                            source={comicicon}
                        />
                    )
                }}
            />
            <Tab.Screen name="MarvelList" component={MarvelList} 
                options={{
                    tabBarIcon:({color})=>(
                        <Image 
                            resizeMode='contain'
                            style={{width:30, tintColor:'#fff'}}
                            source={heromask}
                        />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile} 
                options={{
                    tabBarIcon:({color})=>(
                        <Image 
                            resizeMode='contain'
                            style={{width:30, tintColor:'#fff'}}
                            source={profileicon}
                        />
                    )
                }}
            />
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