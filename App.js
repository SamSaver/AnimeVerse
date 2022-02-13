// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Header } from "./components/Header";
import QueryList from "./components/QueryList";
import TopAnimeList from "./components/TopAnimeList";

export default function App() {
  const [queryList, setQueryList] = React.useState([]);

  const queryListSetter = (queryList) => {
    setQueryList(queryList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header queryListSetter={queryListSetter} />
      {queryList.length > 0 ? <QueryList list={queryList} /> : <TopAnimeList />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
