# Используем базовый образ с Docker
FROM docker:latest

# Устанавливаем директорию для работы
#WORKDIR  C:/Users/wotbl/testt-doc
#WORKDIR /app
WORKDIR /
# Установка docker-compose
RUN apk add --no-cache docker-compose

# Копируем файлы docker-compose.yml в образ
COPY docker-compose.yml .

# Выполняем команду docker compose pull и docker compose up -d
CMD docker-compose pull && docker-compose up -d


#docker build -t my-paperless .
#docker run -d my-paperless
#docker ps -a
#docker ps
#docker-compose up -d
