import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckBox = ({ isEnabled, toggleSwitch, style }) => (
  <BouncyCheckbox
    isChecked={isEnabled}
    style={style}
    fillColor="#FC4F4F"
    text="Advanced Search"
    textStyle={{
      fontWeight: "bold",
      fontSize: 14,
      textDecorationLine: "none",
    }}
    disableBuiltInState={true}
    onPress={() => toggleSwitch()}
  />
);

export default CheckBox;
