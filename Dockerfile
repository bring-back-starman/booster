FROM node:9

RUN apt-get update
RUN apt-get upgrade -y

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# expose the port to outside world
EXPOSE 3000

# Default CMD on run (can be override with docker-compose run)
CMD ["npm", "start"]

