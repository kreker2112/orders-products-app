<template>
  <nav
    class="navbar navbar-light bg-light flex-column navigation-menu p-4 justify-content-start"
  >
    <div class="text-center mb-5 position-relative d-inline-block">
      <img
        src="../assets/Avatar.jpg"
        alt="User Avatar"
        class="rounded-circle avatar"
      />
      <div class="settings-icon position-absolute bottom-0 end-0 shadow-sm">
        <img
          src="../assets/settings-icon.svg"
          alt="Settings"
          class="gear-icon"
        />
      </div>
    </div>
    <ul class="navbar-nav w-100">
      <li class="nav-item mb-3">
        <router-link
          class="nav-link text-uppercase text-center fw-bold"
          to="/orders"
          exact-active-class="router-link-active"
        >
          <span class="link-text">Приход</span>
        </router-link>
      </li>
      <li class="nav-item mb-3">
        <router-link
          class="nav-link text-uppercase text-center fw-bold"
          to="/products"
        >
          <span class="link-text">Продукты</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation-menu {
  width: 200px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1000;
  box-shadow: 6px 0 10px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin: 20px 0;
}

.settings-icon {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  bottom: 0;
  transform: translateY(-100%);

  &:hover {
    background-color: #4caf50;
  }
}

.gear-icon {
  width: 16px;
  height: 16px;
}

.link-text {
  position: relative;

  .router-link-active &::after {
    content: "";
    display: block;
    width: 105%;
    height: 4px;
    background-color: #4caf50;
    position: absolute;
    bottom: -10px;
    left: -2px;
  }
}
</style>
