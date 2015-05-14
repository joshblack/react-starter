ESLINT = node_modules/.bin/eslint

dev:
	iojs server.js

lint:
	$(ESLINT) src/**/*.js
