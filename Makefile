ESLINT = node_modules/.bin/eslint

deps:
	npm install

dev:
	iojs server.js

lint:
	$(ESLINT) src/**/*.js
