FROM --platform=linux/amd64 node:18-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json yarn.lock ./
COPY src src/

RUN yarn install

# Bundle app source
COPY . .

FROM --platform=linux/amd64 node:18-alpine
LABEL version="0.1.0"
LABEL description="Volcanic Backend Sample"
LABEL maintainer="Developers <developers@volcanicminds.com>"

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 2230
CMD [ "yarn", "start" ]