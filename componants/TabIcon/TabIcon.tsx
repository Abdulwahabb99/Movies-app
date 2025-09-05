import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

type TabIconProps = {
  bgImage: any;
  icon: any;
  bgColor: string;
  text: string;
  focused: any;
};

const TabIcon = ({ bgImage, icon, bgColor, text, focused }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={focused ? bgImage : ""}
        className="flex flex-row width-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor={bgColor} className="size-5" />
        <Text className="text-secondary ml-2 text-base font-semibold">
          {text}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor={"#A8B5D8"} />
    </View>
  );
};

export default TabIcon;
