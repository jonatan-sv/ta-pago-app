import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppFrame from "@shared/components/AppFrame";
import Colors from "@consts/Colors";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width - 40;

export default function TrainingSummaryScreen() {
  const [activeTab, setActiveTab] = useState("reps");

  const data = {
    labels: ["Agosto", "Setembro", "Outubro", "Novembro"],
    datasets: [
      {
        data: [0, 180, 120, 250],
        color: (opacity = 1) => `rgba(227,78,19, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: Colors.Orange[100],
    backgroundGradientTo: Colors.Orange[100],
    color: (opacity = 1) => `rgba(227,78,19, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(21,71,132, ${opacity})`,
    propsForDots: { r: "4", strokeWidth: "2", stroke: Colors.Orange[600] },
    propsForBackgroundLines: { stroke: Colors.Orange[300] },
  };

  return (
    <AppFrame>
      <ScrollView>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Resumo do treino</Text>
          <Text style={styles.sub}>Sexta feira, 4 de novembro</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Repetições</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>200</Text>
            <Text style={styles.statLabel}>Tempo</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>Carga total</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Evolução da semana</Text>
        <Text style={styles.sectionSub}>Acompanhe seu progresso diário</Text>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab("reps")}
            style={[styles.tab, activeTab === "reps" && styles.tabActive]}
          >
            <Text
              style={[
                styles.tabText,
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
                styles.tabText,
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
                styles.tabText,
                activeTab === "load" && styles.tabTextActive,
              ]}
            >
              Carga
            </Text>
          </TouchableOpacity>
        </View>

        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
          withInnerLines={true}
          withShadow={false}
        />

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Qualidade do treino
        </Text>
        <Text style={styles.sectionSub}>Como voce se sentiu hoje</Text>

        <View style={styles.checkListBox}>
          <View style={styles.checkItem}>
            <Text style={styles.checkIcon}>✓</Text>
            <Text style={styles.checkText}>Menstruação</Text>
          </View>
          <View style={styles.checkItem}>
            <Text style={styles.checkIcon}>✓</Text>
            <Text style={styles.checkText}>Bom - Hoje era o meu dia</Text>
          </View>
          <View style={styles.checkItem}>
            <Text style={styles.checkIcon}>✓</Text>
            <Text style={styles.checkText}>Positivo - me senti forte</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.finishBtn}>
          <Text style={styles.finishText}>Concluir avaliação</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  headerRow: { marginBottom: 12 },
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
  },
  statCard: {
    width: (Dimensions.get("window").width - 64) / 3,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.Orange[600],
  },
  statNumber: { fontSize: 28, fontWeight: "700", color: Colors.Blue[700] },
  statLabel: { marginTop: 8, color: Colors.Blue[700] },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
    color: Colors.Blue[700],
  },
  sectionSub: { color: Colors.Blue[700], marginBottom: 8 },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: Colors.Orange[100],
    borderRadius: 12,
    padding: 6,
    marginTop: 8,
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: "center", borderRadius: 10 },
  tabActive: {
    backgroundColor: Colors.Orange[200],
    borderBottomWidth: 4,
    borderBottomColor: Colors.Orange[600],
  },
  tabText: { color: Colors.Blue[700] },
  tabTextActive: { fontWeight: "700" },
  chart: { marginVertical: 12, borderRadius: 8, paddingRight: 20 },
  checkListBox: {
    marginTop: 12,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.Orange[600],
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
    backgroundColor: Colors.Orange[600],
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  finishText: { color: "white", fontWeight: "700" },
});
