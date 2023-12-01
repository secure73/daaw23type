FROM node:lts-bullseye-slim
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
