FROM node:lts-alpine

ENV ENV=production

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

RUN node ./seed.js

EXPOSE 5000

CMD [ "npm", "start" ]