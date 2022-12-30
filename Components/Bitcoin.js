import * as React from "react";
import { View, StyleSheet } from "react-native";
import MenuBarLeft from "./MenuBarLeft";
import MenuBarRight from "./MenuBarRight";

const Bitcoin = () => {
  return (
    <View style={styles.container}>
      <MenuBarLeft />
      <MenuBarRight />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Bitcoin;
