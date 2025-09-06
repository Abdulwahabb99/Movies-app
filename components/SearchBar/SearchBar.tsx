import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface searchBarProps {
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value: string;
  placeholder: string;
  placeholderTextColor: string;
  autoFocus?: boolean;
}

const SearchBar = ({
  onPress,
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  autoFocus = false,
}: searchBarProps) => {
  return (
    <View className="flex flex-row items-center rounded-full px-5 py-4 bg-dark-200">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={placeholderTextColor}
      />
      <TextInput
        className="flex-1 ml-2 text-white"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
      />
    </View>
  );
};

export default SearchBar;
