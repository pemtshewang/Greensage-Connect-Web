# base image
FROM node:lts

# create & set working directory
WORKDIR /app

# copy source files
COPY . .
COPY /prisma ./prisma

COPY package*.json ./

RUN apt-get -qy update && apt-get -qy install openssl

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start
