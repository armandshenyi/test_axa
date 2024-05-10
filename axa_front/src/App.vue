<script setup>
import Header from './components/Header.vue'
import List from './components/List_devis.vue'
import New_devis from './components/New_devis.vue'
</script>
<template>
  <Header />
  <main>
    <List />
    <New_devis></New_devis>
  </main>
</template>

<style scoped>
.List {
  margin-left: auto;
  margin-right: auto;
}
</style>
