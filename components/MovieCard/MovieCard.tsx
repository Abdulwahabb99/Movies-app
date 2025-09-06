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
}
const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: movieCardProps) => {
  const uri =
    poster_path && poster_path?.trim() !== ""
      ? `https://image.tmdb.org/t/p/w500${poster_path?.startsWith("/") ? "" : "/"}${poster_path}`
      : "https://via.placeholder.com/500x750.png?text=No+Image";


  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{ uri }}
          className="w-full rounded-lg h-52 "
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row justify-start gap-x-1 items-center">
          <Image source={icons.star} className=" size-4 " resizeMode="cover" />
          <Text className="text-xs font-bold text-white uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-xs font-medium text-light-300 mt-1">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 mt-1 uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
