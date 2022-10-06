import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { palette } from "../config/colors";
import Touchable from "./Touchable";

// TODO: Make this responsive to each and every collection, not just animals
export default ({ item, action }) => (
  <Touchable onPress={action}>
    <View style={styles.indexItem}>
      <Image source={decideAsset(item.asset)} style={styles.icon} />
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: "#333" }}>{item.sub}</Text>
      </View>
    </View>
  </Touchable>
);

const decideAsset = (s) => {
  let imageSource;
  if (s == "Mamífero") imageSource = require("../../assets/mammal.png");
  else if (s == "Réptil") imageSource = require("../../assets/reptile.png");
  else if (s == "Ave") imageSource = require("../../assets/bird.png");
  return imageSource;
};

const styles = StyleSheet.create({
  icon: {
    height: 36,
    width: 36,
    marginRight: 15,
    marginLeft: 5,
    resizeMode: "contain",
  },
  indexItem: {
    padding: 12.5,
    backgroundColor: palette.sand,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 15,
    shadowColor: "black",
    elevation: 3,
    marginBottom: 12,
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
  },
});
