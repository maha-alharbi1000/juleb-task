FROM node:16 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install -g ionic
RUN npm install

COPY . .

RUN npm run build

CMD ["sh","-c","ionic serve --prod"]
