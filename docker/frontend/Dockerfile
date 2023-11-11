FROM node:latest

ENV TZ=Asia/Tokyo
ENV LANG=ja_JP.UTF-8

WORKDIR /frontend

USER node

COPY --chown=node:node ./frontend/package.json /frontend/