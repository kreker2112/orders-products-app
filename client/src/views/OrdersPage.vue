<template>
  <div class="orders-container">
    <div v-if="isLoading" class="spinner-container">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="main-content">
      <div class="header d-flex align-items-center mb-5">
        <button class="add-order-btn me-3">
          <i class="bi bi-plus-lg"></i>
        </button>
        <h2 class="title">Приходы / {{ orders.length }}</h2>
      </div>

      <div class="order-list-container">
        <OrderList
          v-if="orders.length"
          :orders="orders"
          :selectedOrder="selectedOrder"
          :showOrderTitle="showOrderTitle"
          :isDetailsClosing="isDetailsClosing"
          :style="{ flex: selectedOrder ? '0.2' : '1' }"
          @selectOrder="selectOrder"
          @openDeletePopup="openDeletePopup"
        />

        <transition
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
          @before-leave="isDetailsClosing = true"
          @after-leave="finishClosing"
        >
          <OrderDetails
            v-if="selectedOrder"
            :order="selectedOrder"
            :style="{ flex: selectedOrder ? '0.8' : '0' }"
            @close="handleClose"
          />
        </transition>
      </div>

      <transition name="fade">
        <DeleteConfirmation
          v-if="showDeletePopup"
          :show="showDeletePopup"
          :order-id="selectedOrderId"
          @close="closeDeletePopup"
          @confirm-delete="deleteOrder"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedOrder = ref(null);
const selectedOrderId = ref(null);
const showDeletePopup = ref(false);
const isDetailsClosing = ref(false);
const showOrderTitle = ref(true);

onMounted(() => {
  store.dispatch("fetchOrders");
  store.dispatch("fetchProducts");
});

const orders = computed(() => store.state.orders);
const isLoading = computed(() => store.getters.isLoading);

const selectOrder = (order) => {
  selectedOrder.value = order;
};

const handleClose = () => {
  selectedOrder.value = null;
  showOrderTitle.value = false;
};

const finishClosing = () => {
  isDetailsClosing.value = false;
  setTimeout(() => {
    showOrderTitle.value = true;
  }, 50);
};

const openDeletePopup = (order) => {
  selectedOrderId.value = order.id;
  showDeletePopup.value = true;
};

const closeDeletePopup = () => {
  showDeletePopup.value = false;
};

const deleteOrder = (orderId) => {
  store.dispatch("deleteOrder", orderId);
  closeDeletePopup();
};
</script>

<style scoped lang="scss">
.orders-container {
  width: 100%;
  padding: 20px;
}

.header {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: default;
}

.add-order-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2cc951;
  border: 0.3rem solid;
  border-color: #27a143;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;

  i {
    font-size: 0.8rem;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-list-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
