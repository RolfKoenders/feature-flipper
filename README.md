# Feature-Flipper

[![Build Status](https://travis-ci.org/RolfKoenders/feature-flipper.svg?branch=master)](https://travis-ci.org/RolfKoenders/feature-flipper)
[![Coverage Status](https://coveralls.io/repos/github/RolfKoenders/feature-flipper/badge.svg?branch=master)](https://coveralls.io/github/RolfKoenders/feature-flipper?branch=master)
[![npm](https://img.shields.io/npm/v/feature-flipper.svg)](https://www.npmjs.com/package/feature-flipper)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![license](https://img.shields.io/github/license/rolfkoenders/feature-flipper.svg)](https://github.com/RolfKoenders/feature-flipper/blob/master/LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)


> Feature flipping!

TODO: Fill out this long description.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
npm install --save feature-flipper
```

## Usage

```js
const Flipper = require('feature-flipper');
const flip = new Flipper();

// Lets add a feature
flip.set('somefeature', false);

// Use the set method to change the status of a feature
flip.set('somefeature', true);

// To check if a feature is enabled
console.log( flip.isEnabled('somefeature') ); // true

// To flip the status of the feature
flip.flip('somefeature');
console.log( flip.isEnabled('somefeature') ); // false

// To remove the feature
flip.remove('somefeature');

// If you have your feature set in a seperate json object / file you can load them in
const featureSet = {
	somefeature: true,
	someOtherFeature: false
};
flip.load(featureSet);
console.log( flip.isEnabled('someOtherFeature') ); // false

```

## API
TODO: Fill out API specification.

## Middleware
This module can be used to enable/disable endpoints in your restify/express like http server with a middleware like the following.

```js
function flipMW(feature) {
	return function(req, res, next) {
		if(flip.isEnabled(feature)) {
			return next();
		} else {
			return res.send(403);
		}
	}
}

server.get('/somefeature', [
	flipMW('somefeature'),
	(req, res, next) => {
		res.send('somefeature endpoint');
		return next();
	}
]);
```

## Maintainers

[@rolfkoenders](https://github.com/rolfkoenders)

## Contribute

PRs accepted.

## License

MIT © 2017 Rolf Koenders
