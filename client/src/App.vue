<template>
  <div id="app">
    <component :is="currentComponent">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeInRight"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import defaultLayout from "./layouts/defaultLayout.vue";

const route = useRoute();

const components = {
  defaultLayout,
};

const currentComponent = computed(() => {
  return components[route.meta.layout];
});
</script>
