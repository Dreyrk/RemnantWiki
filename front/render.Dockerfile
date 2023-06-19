# build environment
FROM node:lts-alpine as build
ENV ENV=production
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD [ "npm", "start" ]