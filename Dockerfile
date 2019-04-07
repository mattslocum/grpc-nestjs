FROM node:8.15.1-alpine
MAINTAINER Matt Slocum <matt.slocum@gmail.com>

WORKDIR /server

COPY . /server
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
