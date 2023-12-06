FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run clean && \
    npm rebuild && \
    npm run build && \
    mv public ../public

FROM nginx:alpine

COPY --from=builder /app/../public /usr/share/nginx/html

EXPOSE 8080