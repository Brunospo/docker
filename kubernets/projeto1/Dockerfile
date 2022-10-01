FROM node:alpine

WORKDIR /app

COPY *.json src/ ./

RUN npm install && npx tsc

EXPOSE 3000

CMD ["npm", "start"]