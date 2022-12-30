import { StyleSheet, Text, View } from "react-native";
import Bitcoin from "./Components/Bitcoin";
import Logo from "./Components/Logo";
import { Fragment } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Bitcoin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    padding: "50%",
  },
});
