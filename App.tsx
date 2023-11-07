import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import Content from "./src/compenents/Content";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Info from "./src/compenents/Info";

function HomeScreen() {
  return (
    <Box>
      <Content />
    </Box>
  )
}

function InfoScreen() {
  return (
    <Box>
      <Info />
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
              backgroundColor: 'purple',
            },
            tabBarStyle: {
              backgroundColor: 'purple',
            },
            //Icon
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-planet'
                  : 'ios-planet-outline';
              }
              else if (route.name === 'Info') {
                iconName = focused
                  ? 'ios-information'
                  : 'ios-information-outline';
              }



              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'white',

          })}

        >
          <Tab.Screen
            name="Home"
            component={HomeScreen} />
          <Tab.Screen
            name="Info"
            component={InfoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}