FROM node:16

WORKDIR /app

# Аргументы сборки с значениями по умолчанию
ARG ENVIRONMENT=production
ARG PORT=3000
ARG WS_PORT=3001

# Устанавливаем переменные окружения
ENV NODE_ENV=${ENVIRONMENT}
ENV PORT=${PORT}
ENV WS_PORT=${WS_PORT}

# Копируем файлы package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем исходный код
COPY . .

# Открываем порты (опционально)
EXPOSE ${PORT} ${WS_PORT}

# Запуск приложения
CMD ["node", "server.js"]
