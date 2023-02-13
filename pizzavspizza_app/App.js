import { StyleSheet } from 'react-native';
import ListView from "./src/screens/components/list_view"
import DetailView from "./src/screens/components/detail_view";
import ScreenA from "./src/screens/drawer/screenA.js";
import ScreenB from "./src/screens/drawer/screenB.js";
import ScreenC from "./src/screens/drawer/screenC.js";
import TabOne from "./src/screens/tabs/tab1"
import TabTwo from "./src/screens/tabs/tab2"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function renderScreenComponents() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListView} />
        <Stack.Screen name="Detail" component={DetailView} />
        <Stack.Screen name="Tabs" children={renderTabComponents} />
      </Stack.Navigator>
    )
  }
  function renderTabComponents() {
    return (
      <Tab.Navigator >
        <Tab.Screen name="Tab 1" component={TabOne} options={{ headerShown: false }}/>
        <Tab.Screen name="Tab 2" component={TabTwo} options={{ headerShown: false }}/>
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={renderScreenComponents} options={{ headerShown: false }} />
        <Drawer.Screen name="Screen A" component={ScreenA} />
        <Drawer.Screen name="Screen B" component={ScreenB} />
        <Drawer.Screen name="Screen C" component={ScreenC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})


