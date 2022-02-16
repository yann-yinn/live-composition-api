<template>
  <div v-if="loading">Chargement en cours</div>
  <div v-if="error">{{ error }}</div>
  <UserList :users="users" />
</template>

<script lang="ts">
import type { User } from "@/types";
import UserList from "@/components/UserList.vue";

interface Data {
  loading: boolean;
  users: User | null;
  error: string | null;
}
export default {
  components: {
    UserList,
  },
  data(): Data {
    return {
      users: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        const error =
          "Erreur HTTP:" + response.status + "" + response.statusText;
        this.error = error;
        this.loading = false;
        throw new Error(error);
      }
      const users = await response.json();
      this.loading = false;
      this.users = users;
    },
  },
  async created() {
    this.fetchData();
  },
};
</script>
