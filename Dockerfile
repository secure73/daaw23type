FROM node:latest
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
