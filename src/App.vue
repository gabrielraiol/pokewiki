<script setup lang="ts">
import Logo from "@/assets/Pokedex.svg"
import Pokewiki from "@/assets/Pokewiki.svg"
</script>

<template>
  <header class="header">
    <div class="imgs">
      <Logo/>
      <Pokewiki/>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.header {
  background-color: #000029;
  height: 80px;
  width: 100%;
  padding-inline: 8.25rem;

  .imgs {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }
}

</style>
