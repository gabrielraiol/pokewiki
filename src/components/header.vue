<template>
	<header class="header">
    <div class="header__icons">
      <Logo/>
      <Pokewiki/>
    </div>
  </header>
</template>

<script setup lang="ts">
  import Logo from "@/assets/icons/pokeball.svg"
  import Pokewiki from "@/assets/icons/pokewiki.svg"
</script>

<style lang="scss" scoped>
.header {
  background-color: #000029;
  height: 80px;
  width: 100%;
  padding-inline: 8.25rem;

  &__icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }
}
</style>
