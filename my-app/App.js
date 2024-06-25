import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For adding icons in tabs
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyCardsScreen from './screens/MyCardsScreen';
import StatisticsScreen from './screens/StatisticsScreen';

// Define the Tab Navigator
const Tab = createBottomTabNavigator();

// Define the light and dark themes
const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  card: '#f0f0f0',
  textSecondary: '#7a7a7a',
  iconColor: 'black',
};

const darkTheme = {
  background: '#181424',
  text: '#ffffff',
  card: '#333333',
  textSecondary: '#bbbbbb',
  iconColor: '#ffffff',
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              
              // Determine icon name based on route name
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'MyCards') {
                iconName = 'card-outline';
              } else if (route.name === 'Statistics') {
                iconName = 'stats-chart-outline';
              }
              
              // Determine icon color based on theme
              const iconColor = isDarkTheme ? '#ffffff' : color;

              return <Ionicons name={iconName} size={size} color={iconColor} />;
            },
            tabBarActiveTintColor: isDarkTheme ? '#1E90FF' : '#1E90FF',
            tabBarInactiveTintColor: isDarkTheme ? '#bbbbbb' : '#7a7a7a',
            tabBarStyle: {
              backgroundColor: isDarkTheme ? '#28243c' : '#ffffff',
              borderTopColor: isDarkTheme ? '#333333' : '#f0f0f0',
            },
            headerShown: false, // Remove the top bar
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyCards" component={MyCardsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings">
            {() => <SettingsScreen toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
