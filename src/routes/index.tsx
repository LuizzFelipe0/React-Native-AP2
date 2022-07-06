import React from 'react';
import {Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from '../screens/Login';

const RouteStack = createStackNavigator();

export const Router = () =>{
    return (
        <RouteStack.Navigator screenOptions={{headerTransparent: true, headerShown:false}}>
            <RouteStack.Screen name="Login" component={Login}/>
        </RouteStack.Navigator>
    )
}