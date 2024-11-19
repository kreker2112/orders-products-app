# Используем верхний регистр для ключевого слова AS
FROM node:16 AS build

WORKDIR /app

# Определяем аргументы сборки с значениями по умолчанию
ARG ENVIRONMENT=production
ARG VUE_APP_API_URL=""
ARG VUE_APP_WS_URL=""
ARG VUE_APP_IMAGES_URL="/images"

# Устанавливаем переменные окружения для сборки
ENV NODE_ENV=$ENVIRONMENT
ENV VUE_APP_API_URL=$VUE_APP_API_URL
ENV VUE_APP_WS_URL=$VUE_APP_WS_URL
ENV VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL

# Копируем файлы package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN yarn build

# Стейдж для сервера Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Копируем собранные файлы из предыдущего стейджа
COPY --from=build /app/dist .

# Копируем конфигурацию Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Устанавливаем переменные окружения для выполнения (опционально)
ENV NODE_ENV=production

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
