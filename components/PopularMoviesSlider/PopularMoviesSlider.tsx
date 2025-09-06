import { FlatList, Text, useWindowDimensions, View } from "react-native";
import PopularMovieCard from "../PopularMovieCard/PopularMovieCard";

export default function PopularSlider({ data }: { data: any }) {
  const { width } = useWindowDimensions();

  const GAP = 25;
  const CARD_W = Math.round(width * 0.31);

  return (
    <View className="mt-6">
      <Text className="text-white text-3xl font-extrabold px-4 mb-4">
        Popular movies
      </Text>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(m) => String(m.id)}
        showsHorizontalScrollIndicator={false}
        snapToInterval={16}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item, index }) => (
          <View style={{ width: CARD_W, marginRight: GAP }}>
            <PopularMovieCard {...item} index={index} />
          </View>
        )}
      />
    </View>
  );
}
