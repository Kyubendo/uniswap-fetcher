FROM node:18

COPY ./package.json .
COPY ./package-lock.json .

RUN npm i
COPY . .

RUN npm run build