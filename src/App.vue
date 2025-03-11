<script setup lang="ts">
import { useQueryCache } from "@pinia/colada";

const queryCache = useQueryCache();

function onClick() {
  queryCache.invalidateQueries({ key: ["todos"] });
}
</script>

<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/one">One</router-link>
      <router-link to="/two">Two</router-link>
      <router-link to="/three">Three</router-link>
    </div>
    <div>
      <RouterView />
    </div>

    <div>
      <button type="button" @click="onClick">invalidate</button>
    </div>
  </div>
</template>
