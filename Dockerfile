FROM node:lts-bullseye-slim
COPY composer.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
