<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <button @click="close" class="close-btn"><i class="bi bi-x"></i></button>
      <h2>Вы уверены, что хотите удалить этот приход?</h2>
      <div class="order-info">
        <div class="product-images">
          <div
            v-for="product in order.products"
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
            <div class="product-details">
              <p class="product-title">{{ `${product.title}` }}</p>
              <p class="serial-number">{{ `SN-${product.serialNumber}` }}</p>
            </div>
            <p class="product-specs">{{ `${product.specification}` }}</p>
          </div>
        </div>
      </div>

      <div class="modal-actions">
        <button @click="close" class="cancel-btn">ОТМЕНИТЬ</button>
        <button @click="confirmDelete" class="delete-btn">
          <i class="bi bi-trash"></i> УДАЛИТЬ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  show: Boolean,
  orderId: Number,
});

const emit = defineEmits(["close", "confirm-delete"]);
const store = useStore();

const order = computed(() => store.getters.getOrderById(props.orderId));
const imagesUrl = process.env.VUE_APP_IMAGES_URL;

const close = () => {
  emit("close");
};

const confirmDelete = () => {
  emit("confirm-delete", props.orderId);
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: 1000px;
  height: 350px;
  text-align: center;
  overflow: visible;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i {
    font-size: 1.5rem;
    color: #a1a1a1;
  }

  &:hover {
    background-color: #eb7474;
  }
}

h2 {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 30px;
  margin: 0;
  color: #333;
  text-align: start;
}

.order-info {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.product-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &.status-new {
    background-color: #28a745;
  }

  &.status-used {
    background-color: #ff5c5c;
  }
}

.product-image {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid #ddd;
}

.product-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product-specs {
  margin: 0;
  width: 30vw;
  font-weight: bold;
  font-size: 0.95rem;
  line-height: 3vh;
}

.product-title,
.serial-number {
  margin-bottom: 0;
}

.product-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0;
}

.serial-number {
  font-size: 0.875rem;
  color: #666;
}

.modal-actions {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(90deg, #7fc549, #4caf50);
}

.cancel-btn,
.delete-btn {
  font-size: 1rem;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  &.cancel-btn {
    background: transparent;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      color: #e0e0e0;
      background-color: #1cff07cb;
    }
  }

  &.delete-btn {
    background: white;
    color: #dc3545;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 10px 20px;

    i {
      margin-right: 5px;
    }
    &:hover {
      color: #e0e0e0;
      background-color: #f11313;
    }
  }
}
</style>
