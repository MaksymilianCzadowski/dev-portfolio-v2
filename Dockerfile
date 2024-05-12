FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install vite@4.3.2

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]