FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

# Добавляем команду для перезагрузки Nginx при запуске контейнера
CMD /bin/sh -c "nginx -g 'daemon off;' && nginx -s reload"