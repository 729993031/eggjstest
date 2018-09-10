FROM docker.io/node
# Bundle app source
COPY . /egg-example
WORKDIR /egg-example/egg-example

RUN npm i --registry=https://registry.npm.taobao.org
 # 配置环境变量
 ENV HOST 0.0.0.0
#docker run -it node-lfs-official:v1
 # 容器对外暴露的端口号
 EXPOSE 3000
docker run  -d -p 1337:1337 -it  -e "APP_ID=75516" -e "APP_SECRET=563c43cc51c0d67220d799382b32bc621cdfc282" -v /root/src/:/web/ docker.io/alinode/alinode-docker node /web/app.js
 docker build -t eggjs
 docker run -d -p 80:3000  eggjs12
 docker run --name secondpost -d -p 5432:5432 -e POSTGRES_PASSWORD=123456 -e PGDATA=/data/ -e POSTGRES_USER=admin -e POSTGRES_DB=my_db docker.io/postgres
 docker run -t -i --rm -v 80:7001 `pwd`:/usr/src/app daijie/eggjs egg-init egg-example --type=simple
docker run -d -p 80:7001  asdasdas:1.0 /bin/bash
  # 容器启动时执行的命令，类似npm run start
 CMD ["npm", "start"]