#! /bin/bash

echo "重新加载依赖"
yarn config set registry 'https://registry.npm.taobao.org'
yarn

echo "编译项目"
yarn build

echo "复制到 github.io"
rm -rf /home/auto-deploy-repository/HoPGoldy.github.io/**
cp -r /home/auto-deploy-repository/github-io-source/dist/** /home/auto-deploy-repository/HoPGoldy.github.io/

echo "提交 github.io"
cd /home/auto-deploy-repository/HoPGoldy.github.io/
git add .
git commit -m "commit from auto-git"
git push

echo "提交完成"
