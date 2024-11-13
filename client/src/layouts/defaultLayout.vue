<template>
  <TopMenu />
  <NavigationMenu />
  <div class="default-layout">
    <div class="content-area">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from "../components/NavigationMenu.vue";
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  height: 100vh;
  padding-top: 60px;
}

.content-area {
  flex-grow: 1;
  overflow: auto;
  padding: 60px 60px 60px 20px;
  margin-left: 200px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: #4caf50 #e0e0e0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4caf50;
    border-radius: 4px;

    &:hover {
      background-color: #388e3c;
    }
  }
}
</style>
