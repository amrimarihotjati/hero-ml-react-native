import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import AppBar from "./src/compenents/AppBar";
import Content from "./src/compenents/Content";
import BottomBar from "./src/compenents/BottomBar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <Box>
      <Content />
    </Box>
  )
}

function SettingsScreen() {
  return (
    <Box>
      <Text>Settings Screen!</Text>
    </Box>
  );
}

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            //Header
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'purple.500',
            },

            //Icon
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              }
              else if (route.name === 'Settings') {
                iconName = focused
                  ? 'ios-list'
                  : 'ios-list-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'purple',

          })}

        >
          <Tab.Screen
            name="Home"
            component={HomeScreen} />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}