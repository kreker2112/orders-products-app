FROM node:16 AS build

WORKDIR /app

# Определяем аргументы сборки
ARG ENVIRONMENT=production
ARG VUE_APP_API_URL=""
ARG VUE_APP_WS_URL=""
ARG VUE_APP_IMAGES_URL="/images"

# Устанавливаем переменные окружения для сборки
ENV NODE_ENV=$ENVIRONMENT
ENV VUE_APP_API_URL=$VUE_APP_API_URL
ENV VUE_APP_WS_URL=$VUE_APP_WS_URL
ENV VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости, включая dev-зависимости
RUN yarn install --production=false

# Копируем исходный код
COPY . .

# Собираем приложение
RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/dist .

# Копируем конфигурацию Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
