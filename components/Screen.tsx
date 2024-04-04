import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
export default function Screen({
  result,
  screen,
}: {
  screen: string;
  result: string;
}) {
  const [fontsLoaded, fontError] = useFonts({
    MoonHouse: require("../assets/fonts/moonhouse.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      style={styles.screen}
      colors={["#040B0C", "#152022"]}
      end={[1, 0]}
    >
      <Text style={styles.text}>{screen}</Text>
      <Text style={styles.text2}>{result}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: 200,
    paddingRight: 10,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 48,
    fontFamily: "MoonHouse",
  },
  text2: {
    color: "white",
    fontSize: 34,
    fontFamily: "MoonHouse",
  },
});
