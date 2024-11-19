<template>
  <div
    class="top-menu d-flex justify-content-between align-items-center p-3 bg-light border-bottom"
  >
    <div class="d-flex align-items-center custom-padding">
      <img src="../assets/logo-icon.svg" alt="Logo" class="logo-icon me-2" />
      <span class="app-name text-success fw-medium">INVENTORY</span>
    </div>

    <div class="search-bar d-flex align-items-center me-auto ms-5">
      <input
        v-focus
        type="text"
        placeholder="Поиск"
        class="form-control search-input"
      />
    </div>

    <div class="d-flex align-items-center justify-around gap-2">
      <div class="text-start me-3">
        <p class="mb-0 text-muted fw-semibold">{{ currentDay }}</p>
        <p class="mb-0 fw-light">
          <strong>{{ formattedDate }}</strong>
        </p>
      </div>
      <span class="time-indicator d-flex align-items-center me-3">
        <i class="bi bi-clock me-1 text-success"></i>

        <span>{{ currentTime }}</span>
      </span>
      <span class="fw-regular active-sessions">
        Active Sessions: <strong>{{ activeSessions }}</strong>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { io } from "socket.io-client";

const store = useStore();
const currentTime = ref(new Date().toLocaleTimeString());

const activeSessions = computed(() => store.state.activeSessions);
const socket = io(process.env.VUE_APP_WS_URL, {
  path: "/socket.io",
  transports: ["websocket", "polling"],
});

socket.on("session-count", (count) => {
  store.commit("setActiveSessions", count);
});

setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
}, 1000);

const currentDay = computed(() => {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return daysOfWeek[new Date().getDay()];
});

const formattedDate = computed(() => {
  const date = new Date();

  const day = date.getDate().toString().padStart(2, "0");
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
});
</script>

<style scoped lang="scss">
.top-menu {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.custom-padding {
  padding-left: 180px !important;
}

.logo-icon {
  width: 30px;
  height: 30px;
  cursor: default;
}

.app-name {
  font-size: 1rem;
  color: #28a745;
  cursor: default;
}

.search-bar {
  max-width: 500px;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 5px 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  background-color: #f3f5f7;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: padding-top 0.2s ease, padding-bottom 0.2s ease;

  &::placeholder {
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &:focus {
    padding-top: 10px;
    padding-bottom: 2px;

    &::placeholder {
      transform: translateY(-18px);
      opacity: 0.5;
      font-size: 13px;
    }
  }
}

.time-indicator {
  font-size: 1.1rem;
  color: #161616;
  cursor: default;
}

.active-sessions {
  font-size: 1.2rem;
  color: #6c757d;
  cursor: default;
}
</style>
