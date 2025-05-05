# Dev & Production mode
FROM node:18.20.3

WORKDIR /app

COPY ../entrypoint.sh .

RUN chmod a+x entrypoint.sh

COPY ../package.json ./

RUN npm install

COPY ../  .

EXPOSE 3000

CMD [ "/bin/sh", "/app/entrypoint.sh"]
