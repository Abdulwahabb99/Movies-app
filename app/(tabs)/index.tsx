import MovieCard from "@/components/MovieCard/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton/MovieCardSkeleton";
import PopularSlider from "@/components/PopularMoviesSlider/PopularMoviesSlider";
import SearchBar from "@/components/SearchBar/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviseLoading,
    error: moviseError,
    refetch,
  } = useFetch(() => fetchMovies({ query: "" }));

  const {
    data: popularMovies,
    loading: popularMoviesLoading,
    error: popularMoviesError,
  } = useFetch(() => fetchMovies({ query: "", getPopular: true }));
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
        {moviseLoading ? (
          <View className="px-4 pt-4 mt-20 flex-row flex-wrap justify-between gap-y-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </View>
        ) : moviseError ? (
          <Text>Error : {moviseError?.message}</Text>
        ) : (
          <>
            <Image
              source={icons.logo}
              className="w-12 h-10 mt-20 mx-auto mb-5"
            />
            <View className="flex-1 mt-5">
              <SearchBar
                placeholder="search for a movie"
                placeholderTextColor={"#AB8BFF"}
                value=""
                onPress={() => router.push("/search")}
              />
              <PopularSlider data={popularMovies?.results?.slice(0, 10)} />

              <Text className="tex-lg text-white font-bold mt-5 mb-3">
                latest movies
              </Text>
              <FlatList
                data={movies?.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieCard {...item} />}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
