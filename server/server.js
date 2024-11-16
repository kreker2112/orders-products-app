require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { orders, products } = require("./data/app");
const { Server } = require("socket.io");
const http = require("http");
const logger = require("./utils/logger");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const WS_PORT = process.env.WS_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Обслуживание статических файлов из клиентской части
app.use(express.static(path.join(__dirname, "client/dist")));

// Маршрут для API изображений
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API маршруты
app.get("/api/orders", (_req, res) => {
  try {
    const ordersWithProducts = orders.map((order) => ({
      ...order,
      products: order.products,
    }));
    res.json(ordersWithProducts);
    logger.info("Orders data retrieved successfully");
  } catch (error) {
    logger.error("Error processing /api/orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/products", (_req, res) => {
  res.json(products);
  logger.info("Products data retrieved successfully");
});

// Обслуживание клиентской части для всех остальных маршрутов
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "client/dist", "index.html"));
});

// Запуск основного сервера
app.listen(PORT, () => {
  logger.info(`Main server is running on http://localhost:${PORT}`);
});

// Настройка WebSocket сервера
const wsServer = http.createServer();
const io = new Server(wsServer, {
  cors: {
    origin: "*",
  },
});

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions += 1;
  io.emit("session-count", activeSessions);
  logger.info(
    `New WebSocket connection established. Active sessions: ${activeSessions}`
  );

  socket.on("disconnect", () => {
    activeSessions -= 1;
    io.emit("session-count", activeSessions);
    logger.info(
      `WebSocket connection closed. Active sessions: ${activeSessions}`
    );
  });
});

wsServer.listen(WS_PORT, () => {
  logger.info(`WebSocket server is running on http://localhost:${WS_PORT}`);
});

console.log("Serving images from:", path.join(__dirname, "public/images"));
