FROM node:16 AS build

WORKDIR /app

# Определяем аргументы сборки
ARG ENVIRONMENT=production
ARG VUE_APP_API_URL="http://server:3000"
ARG VUE_APP_WS_URL="http://server:3001"
ARG VUE_APP_IMAGES_URL="http://server:3000/images"

# Устанавливаем переменные окружения для сборки
ENV NODE_ENV=$ENVIRONMENT
ENV VUE_APP_API_URL=$VUE_APP_API_URL
ENV VUE_APP_WS_URL=$VUE_APP_WS_URL
ENV VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL

# Отладка переменных окружения
RUN echo "Building with the following environment variables:"
RUN echo "ENVIRONMENT=${ENVIRONMENT}"
RUN echo "VUE_APP_API_URL=${VUE_APP_API_URL}"
RUN echo "VUE_APP_WS_URL=${VUE_APP_WS_URL}"
RUN echo "VUE_APP_IMAGES_URL=${VUE_APP_IMAGES_URL}"

RUN printenv | grep VUE_APP_IMAGES_URL

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости, включая dev-зависимости
RUN yarn install --production=false

# Копируем исходный код
COPY . .

# Собираем приложение
RUN echo "Starting build process..." && yarn build

# Проверяем содержимое папки dist после сборки
RUN echo "Contents of /app/dist after build:" && ls -l /app/dist

# Этап для Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/dist .

# Копируем конфигурацию Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Проверяем наличие конфигурации Nginx
RUN echo "Contents of /etc/nginx/conf.d:" && ls -l /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
