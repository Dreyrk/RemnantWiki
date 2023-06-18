FROM node:lts-alpine

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

RUN npm run seed

EXPOSE 5000

CMD [ "npm", "start" ]
