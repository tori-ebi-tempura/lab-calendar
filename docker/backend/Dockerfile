FROM node:20.9.0-slim

ENV TZ=Asia/Tokyo
ENV LANG=ja_JP.UTF-8

WORKDIR /backend

USER node

COPY ./backend/package*.json /backend/

CMD ["/bin/bash", "-c", "npm install && npm run start"]

