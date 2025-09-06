import MovieCard from "@/components/MovieCard/MovieCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const search = () => {
  const [searchText, setSearchText] = useState("");
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchMovies,
    reset: resetMovies,
  } = useFetch(() => fetchMovies({ query: searchText }), false);

  const hasQuery = searchText.trim().length > 0;
  const resultsCount = movies?.results?.length ?? 0;

  useEffect(() => {
    const timeOutid = setTimeout(async () => {
      if (searchText.trim()) {
        await refetchMovies();
      } else {
        resetMovies();
      }
    }, 500);
    return () => clearTimeout(timeOutid);
  }, [searchText]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full z-0 absolute" />

      <FlatList
        data={movies?.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
          paddingRight: 5,
          marginVertical: 16,
        }}
        className="px-5"
        scrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center items-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="search movies..."
                placeholderTextColor={"#AB8BFF"}
                value={searchText}
                onChangeText={(text: string) => setSearchText(text)}
                autoFocus
              />
            </View>
            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}
            {!moviesLoading && hasQuery && resultsCount > 0 && (
              <Text className="text-white mt-2">
                Search results for{" "}
                <Text className="text-accent">{searchText.trim()}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !moviesError && !moviesLoading ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchText.trim() ? "No movies founded" : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default search;
