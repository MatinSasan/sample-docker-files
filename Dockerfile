#use an existing docker image as a base
FROM alpine

#Download and install a dependency
Run apk add --update redis

#tell the image what to do when it starts as a container
CMD [ "redis-server" ]