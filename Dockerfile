FROM node:18.20.4-alpine3.20
WORKDIR /app
COPY . .
RUN npm run build
CMD ["npm","start"]