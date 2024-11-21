FROM node:16

WORKDIR /app

ARG ENVIRONMENT=production
ARG PORT=3000
ARG WS_PORT=3001

ENV NODE_ENV=${ENVIRONMENT}
ENV PORT=${PORT}
ENV WS_PORT=${WS_PORT}

COPY package.json yarn.lock ./

RUN yarn install

COPY . .
COPY ./public /app/public

EXPOSE ${PORT} ${WS_PORT}

CMD ["node", "server.js"]
