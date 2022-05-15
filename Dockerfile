FROM node:alpine3.11

WORKDIR /usrc/code

COPY package*.json .

RUN npm i 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]