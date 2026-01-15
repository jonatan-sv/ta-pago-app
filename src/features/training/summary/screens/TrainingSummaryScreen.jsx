import Colors from "@consts/Colors";
import AppFrame from "@shared/components/AppFrame";
import { useState, useContext } from "react";
import { NavigationContext } from "@contexts/NavigationContext";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { IconButton, Text, Checkbox } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "@contexts/ThemeContext";

const screenWidth = Dimensions.get("window").width - 80;

export default function TrainingSummaryScreen() {
  const [activeTab, setActiveTab] = useState("reps");
  const navigation = useNavigation();
  const route = useRoute();
  const { qualidade, ciclo, impacto } = route.params || {};
  const { setIndex } = useContext(NavigationContext);
  const { theme } = useTheme();

  const handleFinish = () => {
    navigation.reset({ index: 0, routes: [{ name: "TrainingSelect" }] });
    setIndex(2);
  };

  const date = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const repsData = [
    { value: 0, label: "Ago" },
    { value: 180, label: "Set" },
    { value: 120, label: "Out" },
    { value: 250, label: "Nov" },
  ];
  const timeData = [
    { value: 0, label: "Ago" },
    { value: 100, label: "Set" },
    { value: 200, label: "Out" },
    { value: 300, label: "Nov" },
  ];
  const loadData = [
    { value: 0, label: "Ago" },
    { value: 20, label: "Set" },
    { value: 50, label: "Out" },
    { value: 10, label: "Nov" },
  ];

  const chartMap = {
    reps: repsData,
    time: timeData,
    load: loadData,
  };

  return (
    <AppFrame>
      <ScrollView>
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => navigation.goBack()}
            iconColor={theme.Text}
          />
          <View>
            <Text style={{ color: theme.Text }} variant="titleLarge">
              Resumo do treino
            </Text>
            <Text style={{ color: theme.Text }} variant="bodyMedium">
              {date}
            </Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View
            style={[
              styles.statCard,
              {
                borderColor: theme.Border,
                backgroundColor: theme.CardBackground,
              },
            ]}
          >
            <Text style={[styles.statNumber, { color: theme.Text }]}>50</Text>
            <Text style={[styles.statLabel, { color: theme.Text }]}>
              Repetições
            </Text>
          </View>
          <View
            style={[
              styles.statCard,
              {
                borderColor: theme.Border,
                backgroundColor: theme.CardBackground,
              },
            ]}
          >
            <View style={styles.numberRow}>
              <Text style={[styles.statNumber, { color: theme.Text }]}>
                200
              </Text>
              <Text style={[styles.statLabel, { color: theme.Text }]}>min</Text>
            </View>
            <Text style={[styles.statLabel, { color: theme.Text }]}>Tempo</Text>
          </View>
          <View
            style={[
              styles.statCard,
              {
                borderColor: theme.Border,
                backgroundColor: theme.CardBackground,
              },
            ]}
          >
            <View style={styles.numberRow}>
              <Text style={[styles.statNumber, { color: theme.Text }]}>
                100
              </Text>
              <Text style={[styles.statLabel, { color: theme.Text }]}>KG</Text>
            </View>
            <Text style={[styles.statLabel, { color: theme.Text }]}>
              Carga total
            </Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.Text }]}>
          Evolução da semana
        </Text>
        <Text style={[styles.sectionSub, { color: theme.Text }]}>
          Acompanhe seu progresso diário
        </Text>

        <View
          style={[styles.tabsContainer, { backgroundColor: theme.Background }]}
        >
          <TouchableOpacity
            onPress={() => setActiveTab("reps")}
            style={[styles.tab, activeTab === "reps" && styles.tabActive]}
          >
            <Text
              style={[
                { color: theme.Text },
                activeTab === "reps" && styles.tabTextActive,
              ]}
            >
              Repetições
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("time")}
            style={[styles.tab, activeTab === "time" && styles.tabActive]}
          >
            <Text
              style={[
                { color: theme.Text },
                activeTab === "time" && styles.tabTextActive,
              ]}
            >
              Tempo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("load")}
            style={[styles.tab, activeTab === "load" && styles.tabActive]}
          >
            <Text
              style={[
                { color: theme.Text },
                activeTab === "load" && styles.tabTextActive,
              ]}
            >
              Carga
            </Text>
          </TouchableOpacity>
        </View>

        <LineChart
          data={chartMap[activeTab]}
          height={220}
          width={screenWidth}
          color={Colors.Orange[600]}
          thickness={2}
          curved
          spacing={100}
          yAxisTextStyle={{ color: theme.Text }}
          xAxisLabelTextStyle={{ color: theme.Text }}
          yAxisColor={Colors.Orange[300]}
          xAxisColor={Colors.Orange[300]}
          showVerticalLines={false}
          showHorizontalLines
          horizontalRulesStyle={{
            stroke: Colors.Orange[300],
            strokeDasharray: "6,6",
          }}
          maxValue={Math.max(...chartMap[activeTab].map((item) => item.value))}
          noOfSections={chartMap[activeTab].length}
          dataPointsColor={Colors.Orange[600]}
          dataPointsRadius={4}
          hideRules={false}
        />

        <Text
          style={[styles.sectionTitle, { marginTop: 40, color: theme.Text }]}
        >
          Qualidade do treino
        </Text>
        <Text style={[styles.sectionSub, { color: theme.Text }]}>
          Como voce se sentiu hoje
        </Text>

        <View
          style={[
            styles.checkListBox,
            {
              borderColor: theme.Border,
              backgroundColor: theme.CardBackground,
            },
          ]}
        >
          <View style={styles.checkboxRow}>
            <Checkbox
              status={"checked"}
              onPress={() => {}}
              color={Colors.Orange[800]}
              uncheckedColor={Colors.Orange[800]}
            />
            <Text style={{ color: theme.Text }}>
              {
                {
                  bom: "Bom - Hoje era o meu dia",
                  medio: "Médio - Poderia melhorar",
                  ruim: "Ruim - Hoje não foi o meu dia",
                }[qualidade]
              }
            </Text>
          </View>
          {ciclo && (
            <View style={styles.checkboxRow}>
              <Checkbox
                status={"checked"}
                onPress={() => {}}
                color={Colors.Orange[800]}
                uncheckedColor={Colors.Orange[800]}
              />
              <Text style={{ color: theme.Text }}>{ciclo}</Text>
            </View>
          )}
          {impacto && ciclo === "Menstruação" && (
            <View style={styles.checkboxRow}>
              <Checkbox
                status={"checked"}
                onPress={() => {}}
                color={Colors.Orange[800]}
                uncheckedColor={Colors.Orange[800]}
              />
              <Text style={{ color: theme.Text }}>{impacto}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.finishBtn} onPress={handleFinish}>
          <Text style={styles.finishText}>Concluir avaliação</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.Blue[700],
    marginBottom: 4,
  },
  sub: { color: Colors.Blue[700], opacity: 0.8 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 16,
  },
  statCard: {
    width: (Dimensions.get("window").width - 64) / 3,
    padding: 16,
    borderRadius: 12,
    alignItems: "left",
    borderWidth: 2,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.Blue[700],
  },
  numberRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  statLabel: { marginTop: 8, color: Colors.Blue[700] },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
    color: Colors.Blue[700],
  },
  sectionSub: { marginBottom: 8 },
  tabsContainer: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 6,
    marginTop: 8,
    marginBottom: 12,
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: "center", borderRadius: 10 },
  tabActive: {
    backgroundColor: Colors.Orange[200],
    borderBottomWidth: 4,
    borderBottomColor: Colors.Orange[600],
  },
  tabTextActive: { fontWeight: "700", color: Colors.Blue[700] },
  chart: { marginVertical: 12, borderRadius: 8, paddingRight: 20 },
  checkListBox: {
    marginTop: 12,
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
  },
  checkItem: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  checkIcon: {
    backgroundColor: Colors.Orange[600],
    color: "white",
    padding: 6,
    borderRadius: 6,
    marginRight: 8,
    fontWeight: "700",
  },
  checkText: { color: Colors.Blue[700] },
  finishBtn: {
    marginTop: 18,
    backgroundColor: Colors.Orange[800],
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  finishText: { color: "white", fontWeight: "700" },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
