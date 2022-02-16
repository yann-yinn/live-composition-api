<template>
  <div v-if="loading">Chargement en cours</div>
  <div v-if="error">{{ error }}</div>
  <UserList :users="result" />
</template>

<script setup lang="ts">
import type { User } from "@/types";
import UserList from "@/components/UserList.vue";
import useFetch from "@/composables/useFetch";

const { fetchData, error, loading, result } = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/todos"
);
fetchData();
</script>
