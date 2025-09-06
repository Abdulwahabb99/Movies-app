import SearchBar from "@/components/SearchBar/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, View } from "react-native";

const search = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full z-0 absolute" />
      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto mb-5" />
        <View className="flex-1 mt-5">
          <SearchBar
            placeholder="search for a movie"
            placeholderTextColor={"#AB8BFF"}
            value=""
            // onPress={() => router.push("/search")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default search;
