import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { mockChaptersData } from "../data/mock_chapter_data";
import { Iconify } from "react-native-iconify";
const { width, height } = Dimensions.get("window");
const Chapter = () => {
  return (
    <View style={styles.container}>
      {mockChaptersData
        .reduce((rows, val, index) => {
          if (index % 2 === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(val);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((val, index) => (
              <View key={index} style={styles.chapterContainer}>
                <Text>{val.storytitle}</Text>
                <Text style={{ marginBottom: 10, color: "#6B7280" }}>
                  Chapter {val.chapteridint}: {val.chaptertitle}
                </Text>
                <Text>{val.content.slice(0, 150)}...</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginRight: 10,
                    }}
                    className={
                      (val.storyprogress === "ongoing" &&
                        "bg-orange-100 ...") ||
                      (val.storyprogress === "completed" && "bg-blue-100 ...")
                    }
                  >
                    <Text
                      className={
                        (val.storyprogress === "ongoing" &&
                          "text-orange-500 ...") ||
                        (val.storyprogress === "completed" &&
                          "text-blue-500 ...")
                      }
                    >
                      {val.storyprogress}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderRadius: 10,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 3,
                      paddingBottom: 3,
                    }}
                    className={
                      (val.storytype === "original" && `bg-green-100 ...`) ||
                      (val.storytype === "fanfiction" && `bg-purple-100 ...`) ||
                      (val.storytype === "dark" && `bg-gray-200 ...`)
                    }
                  >
                    <Text
                      className={
                        (val.storytype === "original" &&
                          "text-green-500 ...") ||
                        (val.storytype === "fanfiction" &&
                          "text-purple-500 ...") ||
                        (val.storytype === "dark" &&
                          "text-grey-500 ...")
                      }
                    >
                      {val.storytype}
                    </Text>
                  </View>
                </View>
                <View style={styles.UserInfo}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: val.avatarurl }}
                      style={styles.avatar}
                    />
                    <Text>{val.creatorusername}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Iconify
                      className="items-center justify-center"
                      style={{ marginRight: 5 }}
                      icon="ph:heart-bold"
                      size={20}
                      color={"#0A0A0A"}
                    />
                    <Text>{val.likes}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  chapterContainer: {
    width: width / 2 - 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#F1F5F9",
    borderRadius: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  UserInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default Chapter;
