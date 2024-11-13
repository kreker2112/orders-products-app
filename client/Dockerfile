# Используем Node.js как базовый образ
FROM node:16

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и yarn.lock и устанавливаем зависимости через yarn
COPY package.json yarn.lock ./
RUN yarn install

# Копируем весь проект в контейнер
COPY . .

COPY .env .env

# Сборка приложения
RUN yarn build

# Используем nginx для сервировки приложения
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
