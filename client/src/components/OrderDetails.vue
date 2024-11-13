<template>
  <div class="order-details-container">
    <button @click="close" class="close-btn">
      <i class="bi bi-x"></i>
    </button>

    <h3 class="order-title">{{ `${props.order.title}` }}</h3>

    <button class="add-product-btn">
      <i class="bi bi-plus-circle-fill"></i> Добавить продукт
    </button>

    <ul class="product-list">
      <li
        v-for="product in props.order.products"
        :key="product.serialNumber"
        class="product-item"
      >
        <span
          class="status-dot"
          :class="`status-${product.isNew ? 'new' : 'used'}`"
        ></span>

        <img
          :src="`${imagesUrl}/${product.photo}`"
          :alt="`Изображение продукта: ${product.title}`"
          class="product-image"
        />

        <div class="product-info">
          <p class="product-name">{{ `${product.title}` }}</p>
          <p class="serial-number">{{ `SN-${product.serialNumber}` }}</p>
        </div>

        <p class="product-specs">{{ `${product.specification}` }}</p>

        <span
          class="status-text"
          :class="`text-${product.isNew ? 'new' : 'used'}`"
        >
          {{ product.isNew ? "Свободен" : "В ремонте" }}
        </span>

        <button class="delete-btn">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
});

const imagesUrl = process.env.VUE_APP_IMAGES_URL;

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<style scoped lang="scss">
.order-details-container {
  max-width: 50vw;
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  top: -1.5vh;
  right: -1vw;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 5px 10px #00000033;
  z-index: 1;

  i {
    font-size: 1.5rem;
    color: #a1a1a1;
  }

  &:hover {
    background-color: #d3dbe2;
  }
}

.order-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.add-product-btn {
  color: #28a745;
  background: transparent;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  cursor: default;

  i {
    font-size: 1.5rem;
    margin-right: 5px;
    cursor: pointer;
  }
}

.product-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-item {
  display: flex;
  gap: 1vw;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;

    &.status-new {
      background-color: #28a745;
    }

    &.status-used {
      background-color: #ff5c5c;
    }
  }

  .product-image {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    object-fit: contain;
  }

  .product-info {
    width: 8vw;

    .product-name,
    .serial-number {
      margin-bottom: 0;
    }

    .product-name {
      font-weight: bold;
      font-size: 0.95rem;
    }

    .serial-number {
      font-size: 0.8rem;
      color: #666;
    }
  }

  .product-specs {
    margin: 0;
    width: 20vw;
    font-weight: bold;
    font-size: 0.95rem;
    line-height: 3vh;
  }

  .status-text {
    font-size: 0.9rem;
    font-weight: bold;

    &.text-new {
      color: #28a745;
    }

    &.text-used {
      color: #ff5c5c;
    }
  }

  .delete-btn {
    background: transparent;
    border: none;
    color: #b0b8c0;
    cursor: pointer;

    i {
      font-size: 1.2rem;
    }
  }
}
</style>
