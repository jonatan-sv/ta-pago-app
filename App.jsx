import * as React from "react";
import {
  BottomNavigation,
  Provider as PaperProvider,
} from "react-native-paper";
import Colors from "./constants/colors";

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
import { MsIcon } from "material-symbols-react-native";
import TestScreen from "./screens/TestScreen";

export default function App() {
  const [index, setIndex] = React.useState(2);

  const [routes] = React.useState([
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
  ]);

  const renderScene = BottomNavigation.SceneMap({
    training: TestScreen,
    progress: TestScreen,
    home: TestScreen,
    measures: TestScreen,
    profile: TestScreen,
  });

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
        barStyle={{ backgroundColor: Colors[700] }}
        activeColor="white"
        inactiveColor="white"
        activeIndicatorStyle={{ backgroundColor: Colors[600] }}
      />
    </PaperProvider>
  );
}
