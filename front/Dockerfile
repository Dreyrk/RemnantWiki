FROM node:lts-alpine as build

ENV NODE_ENV=production

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
