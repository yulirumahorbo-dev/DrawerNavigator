import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
        initialRouteName="User"
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import UserScreen from "./screens/UserScreen";
// import Ionicons from "@expo/vector-icons/Ionicons";

// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerActiveBackgroundColor: "#f0e1ff",
//           drawerActiveTintColor: "#3c0a6b",
//           // drawerStyle: { backgroundColor: "#ccc" },
//           headerStyle: { backgroundColor: "#3c0a6b" },
//           headerTintColor: "white",
//         }}
//         initialRouteName="User"
//       >
//         <Drawer.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{
//             drawerLabel: "Welcome Screen",
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="User"
//           component={UserScreen}
//           options={{
//             drawerLabel: "User Screen",
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="person" color={color} size={size} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
