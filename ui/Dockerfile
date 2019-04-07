FROM node:9.11.1
MAINTAINER Matt Slocum <matt.slocum@gmail.com>

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN chown node ./
USER node

# install and cache app dependencies
RUN yarn install

# ensure correct node-sass version and start app
CMD [ -f node_modules/node-sass/vendor/linux-x64-59/binding.node ] || npm rebuild node-sass && \
npm start -- --host 0.0.0.0
