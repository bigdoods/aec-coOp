# aec-coOp

Source code for aec-coOp project

#### To start node-red server:

$ cd server

$ npm install

$ npm start

Then to access admin dashboard, go to: http://localhost:3000/admin

#### To start speckle server

Install docker-compose

Ports in the compose manifest have been updated to map port 3000 on the container(Speckle) to port 3001 on the host to avoid conflict with node-red running on 3000. This is different to normal speckle API settings and will need to be updated in respective clients. Speckle server can be found at localhost:3001/api

In the speckle directory:

$ docker-compose up -d
