FROM node:lts-alpine3.21 AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build


FROM node:lts-alpine3.21

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]