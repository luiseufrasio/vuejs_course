# vuejs_course

npm install -g vue-cli

vue init webpack-simple monster_layer

cd monster_layer

npm install

Open webpack.config.js and add public: 'vuejs-course-luiseufrasio.c9users.io' under devServer

Open package.json and add "dev": "cross-env NODE_ENV=development webpack-dev-server --open --inline --hot --host $IP --port $PORT", under scripts

npm run dev

open vuejs-course-luiseufrasio.c9users.io in your browser

git config --global user.name "your username"
git config --global user.password "your password"