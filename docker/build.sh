#!/bin/bash
set -e
# 修改镜像标签为当前日期时间
time=$(date "+%Y%m%d%H%M%S")
image=liuyuanpiaoyuan/nextjs-serveraction
# 构建镜像，指定Dockerfile以及Context
docker build -t $image:$time $image:latest -f docker/Dockerfile .
docker push $image:latest
docker push $image:$time