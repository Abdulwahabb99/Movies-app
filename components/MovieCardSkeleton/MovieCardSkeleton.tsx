import { View } from "react-native";
import { Skeleton } from "moti/skeleton";

export default function MovieCardSkeleton() {
  return (
    <View style={{ width: "32%" }}>
      <Skeleton width={"100%"} height={208} radius={12} colorMode="dark" />
      <View style={{ height: 8 }} />
      <Skeleton width={"90%"} height={14} radius={6} colorMode="dark" />
      <View style={{ height: 6 }} />
      <Skeleton width={"60%"} height={12} radius={6} colorMode="dark" />
    </View>
  );
}
