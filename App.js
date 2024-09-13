import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importe o createNativeStackNavigator
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { ActivityIndicator } from "react-native";
import {
  Inter_900Black,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
  Inter_200ExtraLight,
  Inter_100Thin,
} from "@expo-google-fonts/inter";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Login from "./src/screens/Login";
import CadastrarLogin from "./src/screens/CadastrarLogin";
import Home from "./src/screens/Home";
import Funcionarios from "./src/screens/Funcionarios";
import DetalhesFuncionario from "./src/screens/DetalhesFuncionario";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Crie o Stack Navigator

function MainTabs() {
  // Função para gerenciar as telas que terão abas na base
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F7AC25",
        tabBarInactiveTintColor: "#CFD8DC",
        tabBarStyle: {
          backgroundColor: "#082777",
          borderTopWidth: 0,
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Funcionarios"
        component={Funcionarios}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="group" size={24} color={color} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="FolhaDePonto"
        component={FolhaDePonto}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timetable" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />*/}
      <Tab.Screen
        name="DetalhesFuncionario"
        component={DetalhesFuncionario}
        options={{ tabBarButton: () => null }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
    Inter_200ExtraLight,
    Inter_100Thin,
  });

  return (
    <>
      {fontsloaded ? (
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="CadastrarLogin" component={CadastrarLogin} />
              <Stack.Screen
                name="MainTabs"
                component={MainTabs}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
