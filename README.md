AWS deployment:

* install docker: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html
* install docker-compose: https://docs.docker.com/compose/install/

* sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

* sudo chmod +x /usr/local/bin/docker-compose

GET APP:

* sudo yum install git
* git clone https://github.com/amitsh1/lstechs.git

BUILD JS:

* cd lstechs
* docker run -it -v ${PWD}/todo:/wrks -w /wrks node npm install
* docker run -it -v ${PWD}/todo:/wrks -w /wrks node npm run build

BUILD DOCKER:

* docker-compose build

RUN:

* docker-compose up

go to http://localhost:4000