./react-select.js: $(wildcard src/*.js node_modules/*/package.json)
	./node_modules/browserify/bin/cmd.js -s ReactSelect -t babelify -g browserify-shim src/Select.js -o $@
