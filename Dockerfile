FROM node:latest
COPY composer.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
