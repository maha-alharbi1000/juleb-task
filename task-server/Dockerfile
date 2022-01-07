FROM node:16-alpine AS development

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

RUN npm run build



FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install 


COPY --from=development /usr/src/api/dist ./dist
COPY --from=development /usr/src/api/package.json .

CMD ["node", "dist/main"]