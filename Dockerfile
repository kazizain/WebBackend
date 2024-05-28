FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run test:ci

COPY junit.xml ../

EXPOSE 80
EXPOSE 443

CMD ["node", "index.js"]
