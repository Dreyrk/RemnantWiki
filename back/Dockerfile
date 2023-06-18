FROM node:lts-alpine

ENV ENV=production

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

RUN npm run seed

EXPOSE 5000

CMD [ "npm", "start" ]