FROM node

WORKDIR /var/www/m111

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/index.js" ]
