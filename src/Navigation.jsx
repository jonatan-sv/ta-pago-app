import Colors from "@consts/Colors";
import {
  msAccountCircle,
  msAccountCircleFill,
  msExercise,
  msExerciseFill,
  msFinanceMode,
  msFinanceModeFill,
  msStraighten,
  msStraightenFill,
  msToday,
  msTodayFill,
} from "@material-symbols-react-native/outlined-400";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MsIcon } from "material-symbols-react-native";
import { useState } from "react";
import { View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { NavigationProvider } from "@contexts/NavigationContext";
import HomeScreen from "./features/home/screens/HomeScreen";
import TrainingProgress from "./features/training/progress/screens/TrainingProgress";
import RatingScreen from "./features/training/rating/screens/RatingScreen.jsx";
import TrainingSelectScreen from "./features/training/select/screens/TrainingSelectScreen";
import TestScreen from "@shared/screens/TestScreen";
import Login from "./features/auth/login/screens/LoginScreen.jsx";
import Cadastro from "./features/auth/register/screens/RegisterScreen.jsx";
import ProfileScreen from "./features/profile/screens/ProfileScreen.jsx";

export default function Navigation() {
  const [index, setIndex] = useState(6);
  const Stack = createNativeStackNavigator();

  const [routes] = useState([
    {
      key: "training",
      title: "Treino",
      focusedIcon: () => (
        <MsIcon icon={msExerciseFill} color="white" size={26} />
      ),
      unfocusedIcon: () => <MsIcon icon={msExercise} color="white" size={26} />,
    },
    {
      key: "progress",
      title: "Progresso",
      focusedIcon: () => (
        <MsIcon icon={msFinanceModeFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msFinanceMode} color="white" size={26} />
      ),
    },
    {
      key: "home",
      title: "Início",
      focusedIcon: () => <MsIcon icon={msTodayFill} color="white" size={26} />,
      unfocusedIcon: () => <MsIcon icon={msToday} color="white" size={26} />,
    },
    {
      key: "measures",
      title: "Medidas",
      focusedIcon: () => (
        <MsIcon icon={msStraightenFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msStraighten} color="white" size={26} />
      ),
    },
    {
      key: "profile",
      title: "Perfil",
      focusedIcon: () => (
        <MsIcon icon={msAccountCircleFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msAccountCircle} color="white" size={26} />
      ),
    },
    {
      key: "login",
      title: "Login",
      focusedIcon: () => (
        <MsIcon icon={msAccountCircleFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msAccountCircle} color="white" size={26} />
      ),
    },

    {
      key: "cadastro",
      title: "Cadastro",
      focusedIcon: () => (
        <MsIcon icon={msAccountCircleFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msAccountCircle} color="white" size={26} />
      ),
    },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "training":
        return (
          <View style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen
                name="TrainingSelect"
                component={TrainingSelectScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrainingProgress"
                component={TrainingProgress}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </View>
        );

      case "progress":
        return <TestScreen />;

      case "home":
        return <HomeScreen />;

      case "measures":
        return <TestScreen />;

      case "profile":
        return <ProfileScreen />;

      case "login":
        return <Login />;

      case "cadastro":
        return <Cadastro />;

      default:
        return null;
    }
  };

  return (
    <NavigationProvider value={{ index, setIndex }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
        barStyle={{ backgroundColor: Colors.Orange[700] }}
        activeColor="white"
        inactiveColor="white"
        activeIndicatorStyle={{ backgroundColor: Colors.Orange[600] }}
        getLazy={() => false}
      />
    </NavigationProvider>
  );
}
