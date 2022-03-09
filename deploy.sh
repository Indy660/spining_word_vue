#!/usr/bin/env sh

## остановить публикацию при ошибках
#set -e
#
## сборка
#npm run build
#
## переход в каталог сборки
#cd dist
#
## если вы публикуете на пользовательский домен
## echo 'www.example.com' > CNAME
#
#git init
#git add -A
#git commit -m 'deploy'
#
## если вы публикуете по адресу https://<USERNAME>.github.io
## git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
#
## если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:indy660/spinning_word_vue.git master:gh-pages
##https://indy660.github.io/spinning_word_vue/
## git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
#
#cd -

npm run build
git add dist -f
git commit -m 'Commit just for github pages'
git subtree push --prefix dist origin gh-pages