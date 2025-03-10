<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/lazy">Lazy</router-link>
      <router-link to="/self">Self</router-link>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>
