FROM node:9

# Set work directory to /www
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN npm install -g babel-cli; npm install;

# Copy app source
COPY . ./

# expose the port to outside world
EXPOSE 3000

# Default CMD on run (can be override with docker-compose run)
CMD ["npm", "start"]

