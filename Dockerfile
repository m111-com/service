FROM node

WORKDIR /var/www/m111

COPY . .

RUN npm install

EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/index.js" ]
