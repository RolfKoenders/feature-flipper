'use strict';

class Flipper {

	constructor() {
		this.features = {};
	}

	set(feature, status) {
		this.features[feature] = status;
	}

	remove(feature) {
		delete this.features[feature];
	}

	isEnabled(feature) {
		return this.features[feature];
	}

}

module.exports = Flipper;
