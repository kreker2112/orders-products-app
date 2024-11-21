<template>
  <ul class="product-list">
    <li
      v-for="product in filteredProducts"
      :key="product.id"
      class="product-item"
    >
      <div
        class="status-dot"
        :class="`status-${product.isNew ? 'new' : 'used'}`"
      ></div>
      <img
        :src="`${imagesUrl}/${product.photo}`"
        alt="Product Image"
        class="product-image"
      />

      <div class="product-details">
        <div class="product-naming">
          <p class="product-title">{{ product.title }}</p>
          <p class="serial-number">SN-{{ product.serialNumber }}</p>
        </div>

        <div class="status-text__container">
          <p class="status" :class="`text-${product.isNew ? 'new' : 'used'}`">
            {{ product.isNew ? "Свободен" : "В ремонте" }}
          </p>
        </div>
        <div class="guarantee-container">
          <div class="guarantee-from">
            {{ formatDate(product.guarantee.start) }}
          </div>
          <div class="guarantee-to">
            {{ formatDate(product.guarantee.end) }}
          </div>
        </div>
        <div class="condition">
          {{ product.isNew ? "Новый" : "Б / У" }}
        </div>
        <div class="price-info">
          <p class="price-small">
            {{ `${product.price.find((p) => p.symbol === "USD").value} $` }}
          </p>
          <p class="price-large">
            {{ `${product.price.find((p) => p.symbol === "UAH").value} UAH` }}
          </p>
        </div>
      </div>

      <p class="specification__title">Спецификации:</p>
      <div class="specification">
        <p class="specification-text">
          {{ formattedSpecification(product.specification) }}
        </p>
      </div>

      <p class="order-name__title">Заказ:</p>
      <div class="order-name">
        {{ getOrderTitle(product.order) }}
      </div>
      <button class="delete-button" @click="deleteProduct(product.id)">
        <i class="bi bi-trash"></i>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const imagesUrl = process.env.VUE_APP_IMAGES_URL;

onMounted(() => {
  store.dispatch("fetchProducts");
  store.dispatch("fetchOrders");
});

const filteredProducts = computed(() => store.getters.filteredProducts);

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

const formattedSpecification = (specification) => {
  return specification.replace(/, /g, ",\n");
};

const getOrderTitle = (orderId) => {
  const order = store.state.orders.find((order) => order.id === orderId);
  return order ? order.title : "Неизвестный заказ";
};
</script>

<style scoped lang="scss">
.product-list {
  list-style: none;
  padding: 0 0 2vh 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 1200px;
}

.product-item {
  width: 112vw;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #f3f5f7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 2vw;

  .status-dot {
    min-width: 10px;
    min-height: 10px;
    border-radius: 50%;

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
    object-fit: contain;
  }

  .product-details {
    display: flex;
    align-items: baseline;
    width: 100%;
    max-width: 35vw;
    flex-shrink: 0;

    .product-naming,
    .status-text__container,
    .guarantee-container,
    .condition,
    .price-info {
      display: flex;
      align-items: center;
    }

    .product-naming {
      width: 10vw;
      flex-direction: column;
      align-items: flex-start;

      .product-title {
        font-weight: bold;
        color: #333;
        margin: 0;
        text-decoration: underline;
      }

      .serial-number {
        font-size: 0.875rem;
        color: #666;
        margin: 0;
        align-self: flex-start;
      }
    }

    .status-text__container {
      align-self: center;
      min-width: 80px;

      .status {
        width: 100px;
        font-size: 0.875rem;
        font-weight: 500;

        &.text-new {
          color: #28a745;
        }
        &.text-used {
          color: #ff5c5c;
        }
      }
    }

    .guarantee-container {
      width: 5vw;
      flex-direction: column;
      align-items: center;

      .guarantee-from,
      .guarantee-to {
        align-self: center;
        font-size: 0.9rem;
        color: #a0a7b1;

        &::before {
          content: attr(data-before);
          margin-right: 10px;
        }
      }
    }

    .condition {
      margin: 0 0.1vw 0 2vw;
      width: 5vw;
      text-align: center;
      align-self: center;
      font-size: 1rem;
      font-weight: 500;
      color: #666;
      white-space: nowrap;
    }

    .price-info {
      width: 7vw;
      text-align: left;
      flex-direction: column;
      align-items: flex-start;

      .price-small {
        font-size: 0.8rem;
        color: #a0a7b1;
        margin: 0;
        align-self: flex-start;
      }

      .price-large {
        font-size: 1.1rem;
        font-weight: 500;
        color: #50677a;
      }
    }
  }

  .specification__title {
    flex-shrink: 0;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #354450;
  }

  .specification {
    width: 15vw;
    flex-shrink: 0;
    margin-top: 10px;
    font-size: 0.9rem;
    color: #50677a;

    .specification-text {
      font-size: 0.955rem;
      color: #50677a;
      font-weight: 500;
    }
  }

  .order-name__title {
    flex-shrink: 0;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #354450;
  }

  .order-name {
    width: 30vw;
    flex-shrink: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #50677a;
    text-decoration: underline;
  }
  .delete-button {
    background: none;
    border: none;
    color: #dc3545;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ff6b6b;
    }

    i {
      font-size: 1.5rem;
    }
  }
}
</style>
