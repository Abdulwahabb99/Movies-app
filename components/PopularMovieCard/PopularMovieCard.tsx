import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface movieCardProps {
  poster_path: any;
  id: number | string;
  vote_average: number;
  title: string;
  release_date: string;
  index: number;
}
const PopularMovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  index,
}: movieCardProps) => {
  const uri =
    poster_path && poster_path?.trim() !== ""
      ? `https://image.tmdb.org/t/p/w500${poster_path?.startsWith("/") ? "" : "/"}${poster_path}`
      : "https://via.placeholder.com/500x750.png?text=No+Image";

  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-full">
        <Image
          source={{ uri }}
          className="w-full rounded-xl h-[214px]"
          resizeMode="cover"
        />
        <Text
          className="text-white mt-4 text-xl font-semibold"
          numberOfLines={1}
        >
          {title}
        </Text>

        <View className="absolute right-2 top-2 bg-black/20 px-2 py-1 rounded-md flex-row items-center justify-center">
          <Image source={icons.star} className="w-3 h-3" resizeMode="contain" />
          <Text className="text-white text-xs ml-1">
            {vote_average.toFixed(1)}
          </Text>
        </View>
        <Text
          className="absolute bottom-12  text-white/90"
          style={{
            fontSize: 64,
            fontWeight: "800",
            textShadowColor: "rgba(0,0,0,0.5)",
            textShadowRadius: 8,
            textShadowOffset: { width: 0, height: 2 },
            left: -13,
          }}
        >
          {index + 1}
        </Text>
        <Text className="text-xs font-medium text-light-300 mt-1">
          {release_date?.split("-")[0]}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default PopularMovieCard;
