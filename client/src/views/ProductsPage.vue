<template>
  <div class="products-container">
    <div class="products-header__filter">
      <h2 class="products__header">
        Продукты / {{ store.getters.products.length }}
      </h2>

      <div class="filters">
        <select v-model="store.state.selectedType" class="form-select">
          <option value="">Тип:</option>
          <option v-for="type in productTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>
    </div>

    <ProductList />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const productTypes = computed(() => store.getters.productTypes);
</script>

<style scoped>
.products-header__filter {
  display: flex;
  gap: 1vw;
  align-items: center;
  text-align: center;
  margin-bottom: 2vh;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-select {
  width: 10vw;
  margin-right: 20px;
}
</style>
