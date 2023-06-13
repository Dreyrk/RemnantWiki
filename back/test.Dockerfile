FROM node:lts-alpine

RUN mkdir /back-app
WORKDIR /back-app
COPY . .
RUN npm i
