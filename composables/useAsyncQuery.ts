import type { DocumentParameter } from "@vue/apollo-composable/dist/useQuery";
import type { ApolloError } from "@apollo/client";
import type { AsyncDataOptions } from "#app";

interface Error {
  data: ApolloError;
}

export default function useAsyncQuery<T>(
  doc: DocumentParameter<any, undefined>,
  options?: AsyncDataOptions<T>
) {
  return useAsyncData<T, Error>(
    () =>
      new Promise<T>((resolve, reject) => {
        const { onResult, onError } = useQuery<T>(doc);
        onResult(({ data, loading }) => {
          if (loading === false) {
            resolve(data);
          }
        });
        onError((error) => {
          reject({ data: error });
        });
      }),
    options
  );
}
