import { reactive } from "vue";

const state = reactive({ count: 0 });

export default function useStore() {
  return { state };
}
