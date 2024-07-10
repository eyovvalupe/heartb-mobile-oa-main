import { Link } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import PictureSlide from "@/components/PictureSlide";
import Chapter from "@/components/Chapter";
import { EvilIcons } from "@expo/vector-icons";
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
const { width, height } = Dimensions.get("window");
const HomeScreen = () => (
  <Layout style={{ flex: 1, alignItems: "center", paddingHorizontal: 7 }}>
    <SafeAreaView className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  </Layout>
);

export default function Page() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  );
}
// interface HandleSearch {
//     (val:string): void
// }
function Content() {
  const [text, setText] = useState<string>("");
  const [selectedOne, setSelectedOne] = useState(true);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const handleSearch = (val) => {
    setText(val);
  };
  return (
    <View className="flex-1">
      <View style={styles.headText}>
        <TouchableOpacity
          onPress={() => {
            setSelectedOne(true);
            setSelectedTwo(false);
          }}
        >
          <Text style={[styles.headFont, selectedOne && styles.headTextActive]}>
            For you
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedOne(false);
            setSelectedTwo(true);
          }}
        >
          <Text style={[styles.headFont, selectedTwo && styles.headTextActive]}>
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <EvilIcons
          style={{ marginLeft: 10, marginBottom: 5, marginRight: 5 }}
          name="search"
          size={24}
          color="black"
        />
        <TextInput
          onChange={handleSearch}
          value={text}
          placeholder="Search for the topic you are interested in"
        />
      </View>
      <PictureSlide />
      <ScrollView style={{ height: height * 0.37 }}>
        <Chapter />
      </ScrollView>
    </View>
  );
}

function Header() {
  return (
    <View>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between "></View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} HeartByte
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 115,
  },
  headTextActive: {
    borderBottomWidth: 1,
    borderBottomColor: "#ff6600",
    marginBottom: 10,
  },
  headFont: {
    fontSize: 20,
    fontWeight: 700,
    paddingVertical: 5,
  },
  search: {
    borderRadius: 15,
    backgroundColor: "#F1F5F9",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
