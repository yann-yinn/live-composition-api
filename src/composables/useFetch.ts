import { ref } from "vue";

export default function useFetch<T>(url: string) {
  const result = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<string | null>("");
  async function fetchData() {
    loading.value = true;
    error.value = null;
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage =
        "Erreur HTTP:" + response.status + "" + response.statusText;
      error.value = errorMessage;
      loading.value = false;
      throw new Error(errorMessage);
    }
    const data = await response.json();
    loading.value = false;
    result.value = data;
  }

  return { fetchData, result, loading, error };
}
