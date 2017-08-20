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

	flip(feature) {
		this.features[feature] = !this.features[feature];
	}

	load(features) {
		Object.keys(features).map((feature) => {
			this.features[feature] = features[feature];
		});
	}

	list() {
		return this.features;
	}

}

module.exports = Flipper;
