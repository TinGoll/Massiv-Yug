FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run clean && \
    npm rebuild && \
    npm run build && \
    mv public /usr/share/nginx/html

FROM nginx:latest

# Копируем статические файлы из первого этапа (builder)
COPY --from=builder /usr/share/nginx/html /usr/share/nginx/html

EXPOSE 8080