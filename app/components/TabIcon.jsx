import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { brand } from "../config/colors";

export default ({ icon }) => {
  const icons = {
    home: "home",
    index: "list",
    map: "map",
    report: "alert-circle",
    info: "information-circle",
    booklet: "document",
  };

  return <Ionicons name={icons[icon]} color={brand.ocean} size={22} />;
};
