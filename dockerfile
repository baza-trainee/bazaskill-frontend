FROM node as base

WORKDIR /src/bazaskill_client

COPY package*.json ./

RUN npm install

RUN npm i sharp

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000