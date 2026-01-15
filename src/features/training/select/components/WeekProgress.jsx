import Colors from "@consts/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Card, ProgressBar, Text } from "react-native-paper";
import Tag from "@shared/components/StreakTag";
import { useTheme } from "@contexts/ThemeContext";

export default function WeekProgress() {
  const { theme, themeName } = useTheme();

  return (
    <Card
      mode="contained"
      style={[styles.cardCalendar, { borderColor: theme.Border }]}
    >
      <LinearGradient
        colors={
          themeName === "light"
            ? [theme.Orange[100], theme.Orange[300]]
            : [theme.Background, theme.Background]
        }
        style={{ borderRadius: 14, padding: 16 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ color: theme.Text }} variant="bodyLarge">
            Progresso da Semana
          </Text>
          <Tag label="2 de 5 treinos"></Tag>
        </View>
        <View>
          <ProgressBar
            progress={0.5}
            color={Colors.Orange[900]} // cor escura da barra cheia
            style={{
              height: 12, // mesma altura da trilha
              borderRadius: 6,
              backgroundColor: Colors.Orange[400],
            }}
          />
        </View>
      </LinearGradient>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardCalendar: {
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 2,
  },
});
