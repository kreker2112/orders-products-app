import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    orders: [],
    products: [],
    selectedOrder: null,
    activeSessions: 0,
    loading: false,
    selectedType: "",
  },
  getters: {
    orders: (state) => state.orders,
    products: (state) => state.products,
    activeSessions: (state) => state.activeSessions,
    getOrderById: (state) => (id) =>
      state.orders.find((order) => order.id === id),
    isLoading: (state) => state.loading,
    productTypes: (state) => {
      const types = state.products.map((product) => product.type);
      return [...new Set(types)];
    },
    filteredProducts: (state) => {
      if (!state.selectedType) return state.products;
      return state.products.filter(
        (product) => product.type === state.selectedType
      );
    },
    selectedOrder: (state) => state.selectedOrder,
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedOrder(state, order) {
      state.selectedOrder = order;
    },
    setActiveSessions(state, count) {
      state.activeSessions = count;
    },
    setLoading(state, loadingStatus) {
      state.loading = loadingStatus;
    },
    setSelectedType(state, type) {
      state.selectedType = type;
    },
  },
  actions: {
    async fetchOrders({ commit, state }) {
      if (state.orders.length === 0) {
        // Загружаем данные, если они ещё не загружены
        commit("setLoading", true);
        const response = await axios.get("http://localhost:3000/api/orders");
        commit("setOrders", response.data);
        commit("setLoading", false);
      }
    },
    async fetchProducts({ commit }) {
      commit("setLoading", true);
      const response = await axios.get("http://localhost:3000/api/products");
      commit("setProducts", response.data);
      commit("setLoading", false);
    },
  },
});

export default store;
