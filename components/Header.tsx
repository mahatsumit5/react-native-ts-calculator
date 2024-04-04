import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30, fontWeight: "900" }}>
        CAlOX
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 18,
  },
});
