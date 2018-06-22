FROM node:8.9.4-slim

RUN apt-get -y update && \
    apt-get -y upgrade && \
    apt-get -y install python build-essential

ENV APP_HOME=/usr/src/app

RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}


COPY ./package.json ${APP_HOME}
COPY ./package-lock.json ${APP_HOME}
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]