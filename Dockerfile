#use an existing docker image as a base
FROM alpine

#Download and install a dependency/dependencies
RUN apk add --update redis
RUN apk add --update gcc

#tell the image what to do when it starts as a container
CMD [ "redis-server" ]

# 'docker build -t [dockerID]/projectName:version .'