import React from "react";
import { Text, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title, styles }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
