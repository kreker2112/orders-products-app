<template>
  <ul
    class="order-list"
    :class="{
      'order-list--details-active': selectedOrder && !isDetailsClosing,
    }"
  >
    <li v-for="order in props.orders" :key="order.id" class="order-item">
      <div v-if="!selectedOrder && showOrderTitle" class="order-title">
        {{ order.title }}
      </div>

      <div class="order-details">
        <div class="icon-and-count">
          <div class="icon-circle">
            <button
              class="btn btn-outline-secondary rounded-circle p-0 d-flex justify-content-center align-items-center"
              style="width: 40px; height: 40px"
              @click.stop="selectOrder(order)"
            >
              <i class="bi bi-list-ul"></i>
            </button>
          </div>
          <div class="product-count d-flex align-items-start">
            <span class="product-number">{{ order.products.length }}</span>
            <span class="product-number__span">Продукта</span>
          </div>
        </div>
        <div class="date">
          <div class="date-short">{{ formatDate(order.date).dateShort }}</div>
          <div class="date-long">
            <span class="day">{{
              formatDate(order.date).dateLong.split("/")[0]
            }}</span>
            /
            <span class="month">{{
              formatDate(order.date).dateLong.split("/")[1]
            }}</span>
            /
            <span class="year">{{
              formatDate(order.date).dateLong.split("/")[2]
            }}</span>
          </div>
        </div>

        <div v-if="!selectedOrder" class="total">
          <ul>
            <li
              v-for="currency in calculateOrderTotal(order)"
              :key="currency.symbol"
            >
              <span v-if="currency.symbol === 'UAH'">{{
                formatCurrency(currency.value, "UAH")
              }}</span>
              <span v-else-if="currency.symbol === 'USD'">{{
                formatCurrency(currency.value, "USD")
              }}</span>
            </li>
          </ul>
        </div>
        <button
          v-if="!selectedOrder"
          class="delete-btn"
          @click="openDeletePopup(order)"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <div
        v-if="selectedOrder && selectedOrder.id === order.id"
        class="active-indicator"
      >
        <i class="bi bi-chevron-right"></i>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  orders: Array,
  selectedOrder: Object,
  showOrderTitle: Boolean,
  isDetailsClosing: Boolean,
});
const emit = defineEmits(["selectOrder", "openDeletePopup"]);

const formatDate = (date) => {
  const optionsShort = { month: "2-digit", day: "2-digit" };
  const optionsLong = { day: "2-digit", month: "short", year: "numeric" };

  const dateShort = new Date(date).toLocaleDateString("en-US", optionsShort);
  let dateLong = new Date(date).toLocaleDateString("ru-RU", optionsLong);
  dateLong = dateLong.replace(" г.", "").replace(".", "");

  const [day, month, year] = dateLong.split(" ");
  dateLong = `${day}/${month.charAt(0).toUpperCase() + month.slice(1)}/${year}`;

  return { dateShort, dateLong };
};

const calculateOrderTotal = (order) => {
  const totals = {};
  order.products.forEach((product) => {
    product.price.forEach((price) => {
      totals[price.symbol] = (totals[price.symbol] || 0) + price.value;
    });
  });
  return Object.entries(totals).map(([symbol, value]) => ({ symbol, value }));
};

const formatCurrency = (value, currency) => {
  return currency === "UAH"
    ? `${value.toFixed(2)} UAH`
    : new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
};

const selectOrder = (order) => {
  emit(
    "selectOrder",
    props.selectedOrder && props.selectedOrder.id === order.id ? null : order
  );
};

const openDeletePopup = (order) => {
  emit("openDeletePopup", order);
};
</script>

<style scoped lang="scss">
.order-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 20px;
  background-color: #f9fafc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #50677a;
  position: relative;

  &--active {
    background-color: #e1e9ef;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
}

.order-title {
  max-width: 900px;
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 500;
  color: #50677a;
  text-decoration: underline;
}

.order-list--details-active {
  .order-title,
  .total,
  .delete-btn {
    display: none;
  }

  .icon-circle {
    margin-left: 20px;
  }

  .product-count {
    margin-left: 10px;
  }

  .date {
    margin-left: 20px;
  }
}

.active-indicator {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 3vw;
  background-color: #d3dbe2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  i {
    color: #ffffff;
    font-size: 2rem;
  }
}

.bi-list-ul {
  transform: scale(1.7);
}

.order-details {
  width: 600px;
  display: flex;
  align-items: center;
  gap: 60px;
  color: #50677a;
  flex-shrink: 0;
}

.icon-and-count {
  display: flex;
  align-items: center;
  gap: 12px;
}

.date {
  width: 110px;
  text-align: center;
  font-size: 1rem;
  color: #50677a;

  &-short {
    width: 120px;
    color: #a0a7b1;
    font-size: 1rem;
  }

  &-long {
    width: 120px;
  }
}

.total {
  width: 110px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: bold;
  color: #50677a;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1rem;
    }
  }
}

.product-count {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  color: #50677a;

  .product-number {
    font-size: 1.5rem;
    font-weight: 500;
    color: #50677a;
    margin: 0;
  }

  .product-number__span {
    font-size: 1.2rem;
    color: #a0a7b1;
  }
}

.usd-currency {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
}

.delete-btn {
  background: transparent;
  border: none;
  color: #b0b8c0;
  cursor: pointer;

  i {
    font-size: 1.4rem;
  }
}
</style>
