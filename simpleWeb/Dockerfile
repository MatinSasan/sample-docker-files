# Specifying a base image
FROM node:alpine

# placing our app
WORKDIR /usr/app

#Copying neededfiles and installing some dependenciess
COPY ./package.json ./
RUN npm install 
COPY ./ ./

#default command
CMD [ "npm", "start" ]

# "docker run -p 8080:8080 <image id/name>"
# [port on localhost]:[port inside container]