import TabIcon from "@/components/TabIcon/TabIcon";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginBottom: 36,
          marginHorizontal: 20,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabIcon
                  bgImage={images.highlight}
                  icon={icons.home}
                  bgColor={"#151312"}
                  text="Home"
                  focused={focused}
                />
                {/* <ImageBackground
                  source={images.highlight}
                  className="flex flex-row width-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
                >
                  <Image
                    source={icons.home}
                    tintColor={"#151312"}
                    className="size-5"
                  />
                  <Text className="text-secondary ml-2 text-base font-semibold">
                    Home
                  </Text>
                </ImageBackground> */}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabIcon
                  bgImage={images.highlight}
                  icon={icons.search}
                  bgColor={"#151312"}
                  text="Search"
                  focused={focused}
                />
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabIcon
                  bgImage={images.highlight}
                  icon={icons.save}
                  bgColor={"#151312"}
                  text="Saved"
                  focused={focused}
                />
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabIcon
                  bgImage={images.highlight}
                  icon={icons.person}
                  bgColor={"#151312"}
                  text="Profile"
                  focused={focused}
                />
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
