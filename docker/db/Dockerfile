FROM postgres:16.0

ENV TZ=Asia/Tokyo
ENV LANG=C.UTF-8

COPY ./docker/db/initdb/init.sql /docker-entrypoint-initdb.d/init.sql