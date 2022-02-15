import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AnimeCard from "./AnimeCard";

function QueryList({ list }) {
  //   console.log("====================================");
  //   console.log(list);
  //   console.log("====================================");
  return (
    <ScrollView style={styles.container}>
      {list.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          title={anime.title}
          image_url={anime.image_url}
          episodes={anime.episodes}
          start_date={anime.start_date}
          end_date={anime.end_date}
          synopsis={anime.synopsis}
          url={anime.url}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    zIndex: -1,
    backgroundColor: "#EEEEEE",
  },
});

export default QueryList;
