FROM node:latest

RUN mkdir -p /home/vuttr-api/app
WORKDIR /home/vuttr-api/app
COPY package.json /home/vuttr-api/app/

RUN npm install -g yarn

COPY . /home/vuttr-api/app

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start" ]