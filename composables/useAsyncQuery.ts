import type { DocumentParameter } from "@vue/apollo-composable/dist/useQuery";
import type { ApolloError } from "@apollo/client";

export default function useAsyncQuery<T>(
  doc: DocumentParameter<any, undefined>
) {
  return useAsyncData<T, ApolloError>(
    () =>
      new Promise<T>((resolve, reject) => {
        const { onResult, onError } = useQuery<T>(doc);
        onResult(({ data, loading }) => {
          if (loading === false) {
            resolve(data);
          }
        });
        onError((error) => {
          reject(error);
        });
      })
  );
}
