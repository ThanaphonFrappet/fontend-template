FROM node:20-slim as build-stage

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM alpine as production-stage

WORKDIR /app

RUN apk add miniserve --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community

COPY --from=build-stage /app/dist/spa .
COPY --from=build-stage /app/entrypoint.sh ./entrypoint.sh

RUN chmod u+x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
