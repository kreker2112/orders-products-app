FROM node:16 AS build

WORKDIR /app

ARG ENVIRONMENT=production
ARG VUE_APP_API_URL=""
ARG VUE_APP_WS_URL=""
ARG VUE_APP_IMAGES_URL="http://localhost:8080/images"

ENV NODE_ENV=$ENVIRONMENT
ENV VUE_APP_API_URL=$VUE_APP_API_URL
ENV VUE_APP_WS_URL=$VUE_APP_WS_URL
ENV VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL

RUN echo "Building with the following environment variables:"
RUN echo "ENVIRONMENT=${ENVIRONMENT}"
RUN echo "VUE_APP_API_URL=${VUE_APP_API_URL}"
RUN echo "VUE_APP_WS_URL=${VUE_APP_WS_URL}"
RUN echo "VUE_APP_IMAGES_URL=${VUE_APP_IMAGES_URL}"

RUN printenv | grep VUE_APP_IMAGES_URL

COPY package.json yarn.lock ./

RUN yarn install --production=false

COPY . .

RUN echo "Starting build process..." && yarn build

RUN echo "Contents of /app/dist after build:" && ls -l /app/dist

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN echo "Contents of /etc/nginx/conf.d:" && ls -l /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
