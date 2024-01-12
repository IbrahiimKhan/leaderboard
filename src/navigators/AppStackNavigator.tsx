import React, { type ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MinimalScreen from '../screens/MinimalScreen';
import { ROUTES } from './ROUTES';
import AdvancedScreen from '../screens/AdvancedScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();
const AppStackNavigator = (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
                <Stack.Screen name={ROUTES.MINIMAL} component={MinimalScreen} />
                <Stack.Screen name={ROUTES.ADVANCED} component={AdvancedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;