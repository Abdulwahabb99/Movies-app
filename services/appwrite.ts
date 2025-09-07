import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

const tmdbImg = (path?: string) =>
  path && path.trim() !== ""
    ? `https://image.tmdb.org/t/p/w500${path.startsWith("/") ? "" : "/"}${path}`
    : "https://via.placeholder.com/500x750.png?text=No+Image";

export const updateSearchCount = async (query: string, movie: any) => {
  try {
    const q = (query ?? "").trim();
    if (!q) return;

    const results = await database.listDocuments({
      databaseId: DATABASE_ID,
      collectionId: COLLECTION_ID,
      queries: [Query.equal("searchTerm", [q])],
    });

    if (results.documents.length > 0) {
      const doc = results.documents[0];

      await database.updateDocument({
        databaseId: DATABASE_ID,
        collectionId: COLLECTION_ID,
        documentId: doc.$id,
        data: {
          count: (doc.count ?? 0) + 1,
        },
      });
    } else {
      await database.createDocument({
        databaseId: DATABASE_ID,
        collectionId: COLLECTION_ID,
        documentId: ID.unique(),
        data: {
          searchTerm: q,
          count: 1,
          movie_id: movie?.id ?? 0,
          poster_url: tmdbImg(movie?.poster_path),
          title: movie?.title ?? "Unknown",
        },
      });
    }
  } catch (error) {
    console.error("Error in updateSearchCount:", error);
  }
};
