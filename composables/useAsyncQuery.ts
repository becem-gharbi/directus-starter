import type { DocumentParameter } from "@vue/apollo-composable/dist/useQuery";

export default function useAsyncQuery<T>(
  doc: DocumentParameter<any, undefined>
) {
  return useAsyncData(
    () =>
      new Promise<T>((resolve, reject) => {
        const { onResult, onError } = useQuery<T>(doc);
        onResult(({ data }) => resolve(data));
        onError((error) => reject(error));
      })
  );
}
