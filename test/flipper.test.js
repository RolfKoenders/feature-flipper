'use strict';

import test from 'ava';
import Flipper from '../lib/flipper';

let flip;

test.beforeEach(() => {
	flip = new Flipper();
});

test.afterEach(() => {
	flip = null;
});

test('Set a feature enabled', t => {
	flip.set('newAwesomeFeature', true);
	t.true(flip.isEnabled('newAwesomeFeature'));
});

test('Set a feature and change the status', t => {
	flip.set('awesomefeature', true);
	flip.set('awesomefeature', false);
	t.false(flip.isEnabled('awesomefeature'));
});

test('Load in features', t => {
	const featureSet = {
		awesomeFeature: true,
		otherFeature: false,
		salesWantsThisFeature: true
	};
	flip.load(featureSet);
	t.true(flip.isEnabled('awesomeFeature'));
	t.false(flip.isEnabled('otherFeature'));
	t.true(flip.isEnabled('salesWantsThisFeature'));
});

test('Flip the status of a feature', t => {
	flip.set('enabledFeature', true);
	t.true(flip.isEnabled('enabledFeature'));
	flip.flip('enabledFeature');
	t.false(flip.isEnabled('enabledFeature'));
});

test('List all the features in the flipper', t => {
	const featureSet = {
		awesomeFeature: true,
		otherFeature: false,
		salesWantsThisFeature: true
	};
	flip.load(featureSet);
	const features = flip.list();
	t.is(Object.keys(features).length, 3, 'Expected 3 features.');
});

test('Remove a feature from the flipper', t => {
	flip.set('awesomefeature', true);
	flip.remove('awesomefeature');
	const features = flip.list();
	t.is(Object.keys(features).length, 0, 'Feature is not removed.');
});
