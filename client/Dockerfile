# Stage 1: Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем только необходимые файлы, чтобы избежать копирования лишних данных
COPY package.json package-lock.json ./

# Устанавливаем зависимости и выполняем сборку приложения
RUN npm install \
    && npm run clean \
    && npm rebuild \
    && npm run build \
    && mv public ../public \
    && npm cache clean --force

# Stage 2: Production Stage
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=builder /app/../public /usr/share/nginx/html

# Открываем порт 8080 для доступа к веб-приложению
EXPOSE 8080