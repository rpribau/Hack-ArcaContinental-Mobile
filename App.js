// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Movimientos':
              iconName = 'wallet';
              break;
            case 'Ofertas':
              iconName = 'notifications-outline';
              break;
            case 'Mi Perfil':
              iconName = 'person-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: '¡Bienvenido, Roberto!' }} // Establecer el título de la cabecera aquí
      />
      <Tab.Screen 
        name="Movimientos" 
        component={SearchScreen}
        options={{ headerTitle: 'Movimientos' }} 
      />

      <Tab.Screen name="Ofertas" 
        component={NotificationsScreen} 
      />

      <Tab.Screen name="Mi Perfil" 
        component={ProfileScreen} 
      />


    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
