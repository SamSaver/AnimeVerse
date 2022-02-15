// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Header } from "./components/Header";
import QueryList from "./components/QueryList";
import TopAnimeList from "./components/TopAnimeList";

export default function App() {
  const [queryList, setQueryList] = React.useState([]);
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const queryListSetter = (queryList) => {
    setQueryList(queryList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        queryListSetter={queryListSetter}
        isEnabled={isEnabled}
        toggleSwitch={toggleSwitch}
      />
      {queryList.length > 0 ? <QueryList list={queryList} /> : <TopAnimeList />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
